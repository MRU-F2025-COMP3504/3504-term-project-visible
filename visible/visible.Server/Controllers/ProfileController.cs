using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using visible.Services.Interfaces;
using visible.Services.Models;

namespace visible.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProfileController(IProfileRepository profileRepository) : BaseController
{
    [HttpGet]
    [Authorize]
    public async Task<IActionResult> Get()
    {
        var user = await profileRepository.GetUserProfile(UserId);
        var businesses = await profileRepository.GetBusinesses(UserId);
        var influencers = await profileRepository.GetInfluencers(UserId);
        user.BusinessProfiles = (List<Business>?)businesses;
        user.InfluencerProfiles = (List<Influencer>?)influencers;
        return Ok(user);
    }
}
