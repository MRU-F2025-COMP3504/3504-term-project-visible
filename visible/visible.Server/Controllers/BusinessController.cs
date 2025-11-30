using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using visible.Services.Interfaces;
using visible.Services.Models;

namespace visible.Server.Controllers;

///<summary>
//Entry point for the Business API
/// Handles creation and retrieval of business profiles.
//</summary>
[ApiController]
[Route("api/[controller]")]
public class BusinessController(IBusinessRepository businessRepository) : BaseController
{
    //<summary>
    //Retrieves all business profiles.
    //</summary>
    [HttpGet]
    [Authorize]
    public async Task<ActionResult> GetAll()
    {
        return Ok(await businessRepository.GetAllBusinesses());
    }

    //<summary>
    //Retrieval of a specific business profile by name.
    //</summary>
    [HttpGet("by-name/{businessName}")]
    public async Task<ActionResult> GetByName(string businessName)
    {
        var business = await businessRepository.GetBusinessByName(businessName);
        if (business == null)
            return NotFound($"Business with name '{businessName}' not found.");

        return Ok(business);
    }

    /// <summary>
    /// Creates a new business profile tied to an  user.
    /// </summary>
    [HttpPost]
    [Authorize]
    public async Task<ActionResult> Create([FromBody] Business business)
    {
        if (business == null)
            return BadRequest("Business data required.");

        var newId = await businessRepository.CreateBusinessProfile(business, UserId);
        return Ok(new { BusinessId = newId });
    }
}
