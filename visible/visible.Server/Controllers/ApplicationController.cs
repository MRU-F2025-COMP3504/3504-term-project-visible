using Microsoft.AspNetCore.Mvc;
using visible.Services.Interfaces;
using visible.Services.Models;

namespace visible.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ApplicationController(
    IGigApplicationRepository gigApplicationRepository,
    ILogger<ApplicationController> logger
) : ControllerBase
{
    [HttpPost("create")]
    public async Task<ActionResult> ApplyToGigListing([FromBody] GigApplication application)
    {
        logger.LogInformation("Beginning to create Gig Application");
        logger.LogInformation(
            application.ApplicationText,
            application.ApplicantId,
            application.Status
        );
        return Ok(await gigApplicationRepository.CreateNewGigListingApplication(application));
    }
}
