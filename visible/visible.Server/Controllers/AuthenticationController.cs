using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using visible.Services.Interfaces;
using visible.Services.Models;

namespace visible.Server.Controllers
{
    /// <summary>
    /// The entry point for the user authentication APIs.
    /// </summary>
    /// <param name="authenticationRepository"> The user authentication accessor</param>
    [ApiController]
    [Route("api/[controller]")]
    public class AuthenticationController(
        IAuthenticationRepository authenticationRepository,
        ILogger<AuthenticationController> logger,
        IConfiguration configuration
    ) : ControllerBase
    {
        private IConfiguration _configuration => configuration;

        [HttpPost("sign-in")]
        public async Task<ActionResult> SignIn([FromForm] SignInRequest signInRequest)
        {
            var username = signInRequest.Username;
            logger.LogInformation("Creating login request for {username}", signInRequest.Username);

            var success = await authenticationRepository.SignInAsync(signInRequest);
            if (!success)
                return Unauthorized();
            var token = GenerateJwtToken(signInRequest.Username);
            return Ok(token);
        }

        private string GenerateJwtToken(string username)
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };

            var jwtKey = _configuration["jwtKey"];
            var issuer = _configuration["jwtIssuer"];

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: issuer,
                audience: issuer,
                claims: claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        [HttpPost("sign-up")]
        public async Task<ActionResult> SignUp([FromForm] SignupRequest signupRequest)
        {
            bool userExists = await authenticationRepository.SearchForUserAsync(signupRequest);
            if (userExists)
            {
                return BadRequest($"Username {signupRequest.Username} already exists");
            }

            return Ok(await authenticationRepository.CreateNewUserAsync(signupRequest));
        }
    }
}
