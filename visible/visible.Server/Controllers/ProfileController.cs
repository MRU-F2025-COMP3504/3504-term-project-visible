using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using visible.Services.Interfaces;
using visible.Services.Models;

namespace visible.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProfileController(IProfileRepository profileRepository) : ControllerBase
{
    [HttpGet]
    [Authorize]
    public async Task<IActionResult> Get()
    {
        string token = "";
        Request.Cookies.TryGetValue("token", out token);

        var decoded = new JwtSecurityTokenHandler().ReadJwtToken(token);
        var userIdClaim = decoded.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Sub);
        var user = await profileRepository.GetUserProfile(Convert.ToInt32(userIdClaim.Value));
        var businesses = await profileRepository.GetBusinesses(Convert.ToInt32(userIdClaim.Value));
        var influencers = await profileRepository.GetInfluencers(
            Convert.ToInt32(userIdClaim.Value)
        );
        user.BusinessProfiles = (List<Business>?)businesses;
        user.InfluencerProfiles = (List<Influencer>?)influencers;
        return Ok(user);
    }
}
