using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using visible.Services.Interfaces;
using visible.Services.Models;
using SameSiteMode = Microsoft.AspNetCore.Http.SameSiteMode;

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
        IConfiguration configuration
    ) : ControllerBase
    {
        private IConfiguration _configuration => configuration;

        [HttpPost("sign-in")]
        public async Task<ActionResult> SignIn([FromBody] SignInRequest signInRequest)
        {
            var username = signInRequest.Username;

            var id = await authenticationRepository.SignInAsync(signInRequest);
            if (id == 0)
                return Unauthorized();
            var token = GenerateJwtToken(id.ToString());
            var options = new CookieOptions
            {
                HttpOnly = true,
                Expires = DateTime.Now.AddMinutes(30),
                Secure = true,
                SameSite = SameSiteMode.Lax,
            };
            Response.Cookies.Append("token", token, options);

            return Ok();
        }

        private string GenerateJwtToken(string userId)
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, userId),
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
        public async Task<ActionResult> SignUp([FromBody] SignupRequest signupRequest)
        {
            bool userExists = await authenticationRepository.SearchForUserAsync(signupRequest);
            if (userExists)
            {
                return BadRequest($"Username {signupRequest.Username} already exists");
            }

            return Ok(await authenticationRepository.CreateNewUserAsync(signupRequest));
        }

        [HttpGet("sign-out")]
        public async Task<IActionResult> SignOutUser()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            Response.Cookies.Delete("token");

            var returnUrl = _configuration["callback"];
            logger.LogInformation("ReturnUrl: {returnUrl}", returnUrl);

            return Redirect(returnUrl);
        }
    }
}
