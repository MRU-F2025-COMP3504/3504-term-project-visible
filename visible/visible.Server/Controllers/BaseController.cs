using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Mvc;

namespace visible.Server.Controllers;

public class BaseController : ControllerBase
{
    public int UserId
    {
        get
        {
            string token = "";
            Request.Cookies.TryGetValue("token", out token);
            var decoded = new JwtSecurityTokenHandler().ReadJwtToken(token);
            return Convert.ToInt32(
                (decoded.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Sub)?.Value)
            );
        }
    }
}
