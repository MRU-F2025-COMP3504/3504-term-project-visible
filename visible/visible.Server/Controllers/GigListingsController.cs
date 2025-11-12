using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using visible.Services.Interfaces;
using visible.Services.Models;

namespace visible.Server.Controllers;

/// <summary>
/// The entry point for gig listings API.
/// </summary>
/// <param name="gigListingRepository"> The gig listing accessor </param>
[ApiController]
[Route("api/[controller]")]
public class GigListingsController(IGigListingRepository gigListingRepository) : BaseController
{
    [HttpGet]
    public async Task<ActionResult> Get()
    {
        return Ok(await gigListingRepository.GetRecentGigListings());
    }

    [HttpPost("create")]
    public async Task<ActionResult> CreateGigListing([FromBody] GigListing gigListing)
    {
        return Ok(await gigListingRepository.CreateNewGigListing(gigListing));
    }
}
