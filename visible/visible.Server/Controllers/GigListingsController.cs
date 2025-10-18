using Microsoft.AspNetCore.Mvc;
using visible.Services;

namespace visible.Server.Controllers;

/// <summary>
/// The entry point for gig listings API. 
/// </summary>
/// <param name="gigListingRepository"> The gig listing accessor </param>
[ApiController]
[Route("api/[controller]")]
public class GigListingsController(IGigListingRepository gigListingRepository) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult> Get()
    {
        return Ok(await gigListingRepository.GetRecentGigListings());
    }
}