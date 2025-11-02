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
        public async Task<ActionResult> SignIn([FromForm] SignInRequest signInRequest)
        {
            logger.LogInformation("Creating login request for {username}", signInRequest.Username);

            return Ok(await authenticationRepository.SignInAsync(signInRequest));
        }
    }
}
