using Microsoft.AspNetCore.Mvc;
using visible.Services;

namespace visible.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GigListingsController : ControllerBase
    {
        private readonly IGigListingService _gigListingService;
        private readonly ILogger<GigListingsController> _logger;

        public GigListingsController(ILogger<GigListingsController> logger, IGigListingService gigListingService)
        {
            _logger = logger;
            _gigListingService = gigListingService;
        }

        [HttpGet]
        public IEnumerable<GigListing> Get()
        {
            return _gigListingService.GetGigListings();
        }
    }
}
