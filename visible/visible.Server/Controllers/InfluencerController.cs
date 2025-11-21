using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using visible.Services.Interfaces;
using visible.Services.Models;

namespace visible.Server.Controllers;

/// <summary>
/// The entry point for the Influencer API.
/// </summary>
/// <param name="influencerRepository">The influencer data accessor.</param>
[ApiController]
[Route("api/[controller]")]
public class InfluencerController(IInfluencerRepository influencerRepository) : BaseController
{
    /// <summary>
    /// Retrieves all influencer profiles.
    /// </summary>
    [HttpGet]
    public async Task<ActionResult> GetAll()
    {
        return Ok(await influencerRepository.GetAllInfluencers());
    }

    /// <summary>
    /// Retrieves a specific influencer profile by the user's email.
    /// </summary>
    /// <param name="email">The email address associated with the user.</param>
    [HttpGet("by-email/{email}")]
    public async Task<ActionResult> GetByEmail(string email)
    {
        var influencer = await influencerRepository.GetInfluencerByEmail(email);
        if (influencer == null)
            return NotFound($"Influencer with email '{email}' not found.");
        return Ok(influencer);
    }

    /// <summary>
    /// Creates a new influencer profile linked to an existing user.
    /// </summary>
    /// <param name="influencer">The influencer object containing user ID and profile details.</param>
    [HttpPost]
    public async Task<ActionResult> Create([FromBody] Influencer influencer)
    {
        if (influencer == null)
            return BadRequest("Influencer data is required.");

        var newId = await influencerRepository.CreateInfluencerProfile(influencer, UserId);
        return Ok(new { InfluencerId = newId });
    }
}
