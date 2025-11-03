using Microsoft.AspNetCore.Mvc;
using Moq;
using visible.Server.Controllers;
using visible.Services.Interfaces;
using visible.Services.Models;

namespace visible.Tests.ControllerTests;

public class GigListingsControllerTests
{
    [Fact]
    public async Task Test_CanGetGigListings()
    {
        // Arrange
        var mockRepository = new Mock<IGigListingRepository>();
        var gigListings = new List<GigListing>
        {
            new GigListing(1, "Canela", "New Product Launch", 300),
            new GigListing(2, "Breakaway Sports", "Instagram Follower Campaign", 1000),
        };
        mockRepository.Setup(r => r.GetRecentGigListings()).ReturnsAsync(gigListings);

        // Act
        var controller = new GigListingsController(mockRepository.Object);
        var result = await controller.Get();

        // Assert
        Assert.IsType<OkObjectResult>(result);
        var okResult = result as OkObjectResult;
        Assert.NotNull(okResult);
    }
}
