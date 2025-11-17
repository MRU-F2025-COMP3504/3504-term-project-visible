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
            new()
            {
                GigId = 1,
                BusinessId = 1,
                BusinessName = "Canela",
                Title = "New Product Launch",
                Description = "We want to hype up this new product on Instagram and YouTube.",
                Location = "Calgary, AB",
                Budget = 1500,
                Requirements = "Minimum 1K followers on Instagram",
                Status = "Open",
                Deadline = new DateTime(2025, 11, 30, 19, 30, 00, DateTimeKind.Local),
            },
            new()
            {
                GigId = 2,
                BusinessId = 2,
                BusinessName = "Bass Pro Shop",
                Title = "Spring into Savings",
                Description = "Test description",
                Location = "Edmonton, AB",
                Budget = 750,
                Requirements = "",
                Status = "Open",
                Deadline = new DateTime(2025, 12, 31, 19, 30, 00, DateTimeKind.Local),
            },
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
