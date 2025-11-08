using Microsoft.AspNetCore.Mvc;
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
        ILogger<AuthenticationController> logger
    ) : ControllerBase
    {
        [HttpPost("sign-in")]
        public async Task<ActionResult> SignIn([FromBody] SignInRequest signInRequest)
        {
            logger.LogInformation("Creating login request for {username}", signInRequest.Username);

            return Ok(await authenticationRepository.SignInAsync(signInRequest));
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
    }
}
