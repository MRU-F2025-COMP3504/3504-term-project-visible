using Moq;
using visible.Services.Data.Interfaces;
using visible.Services.Repositories;
using visible.Tests.Models;

namespace visible.Tests.Services;

/// <summary>
/// Unit tests for the GigRepository service
/// </summary>
public class GigRepositoryTests
{
    SimpleRow[] rows = new[]
    {
        new SimpleRow(
            new Dictionary<string, object>
            {
                { "gig_id", "1" },
                { "business_id", "1" },
                { "business_name", "Euphoria" },
                { "title", "Open Mic Poetry Host" },
                { "description", "Making connections through the arts" },
                { "location", "Edmonton, AB" },
                { "budget", 350 },
                { "requirements", "Availability for 6 weekly events" },
                { "status", "Open" },
                { "application_deadline", DateTime.Now.ToLocalTime() },
                { "created_at", new DateTime(2025, 10, 20).ToLocalTime() },
                { "updated_at", new DateTime(2025, 10, 30).ToLocalTime() },
            }
        ),
        new SimpleRow(
            new Dictionary<string, object>
            {
                { "gig_id", "2" },
                { "business_id", "1" },
                { "business_name", "Bass Pro Shop" },
                { "title", "Shop til we drop" },
                { "description", "Supporting Local Businesses this Christmas" },
                { "location", "Calgary, AB" },
                { "budget", 500 },
                { "requirements", "N/A" },
                { "status", "Open" },
                { "application_deadline", DateTime.Now.ToLocalTime() },
                { "created_at", new DateTime(2025, 09, 30).ToLocalTime() },
                { "updated_at", new DateTime(2025, 09, 30).ToLocalTime() },
            }
        ),
    };

    [Fact]
    public async Task Test_GetCorrectGigsCount()
    {
        // Arrange - create the necessary mocks to validate database functionality
        var executorMock = new Mock<IQueryBuilder>();
        var queryMock = new Mock<IQuery>();

        executorMock.Setup(c => c.CreateQuery(It.IsAny<string>())).Returns(queryMock.Object);
        queryMock.Setup(q => q.ExecuteAsync()).Returns(rows.ToAsyncEnumerable());

        // Act - test existing functionality in the database infrastructure
        var repository = new GigListingRepository(executorMock.Object);
        var gigs = await repository.GetRecentGigListings();

        // Assert
        Assert.Equal(2, gigs.Count());
    }

    [Fact]
    public async Task Test_GetCorrectBudget()
    {
        var executorMock = new Mock<IQueryBuilder>();
        var queryMock = new Mock<IQuery>();
        executorMock.Setup(c => c.CreateQuery(It.IsAny<string>())).Returns(queryMock.Object);
        queryMock.Setup(q => q.ExecuteAsync()).Returns(rows.ToAsyncEnumerable());

        var repository = new GigListingRepository(executorMock.Object);
        var gigs = await repository.GetRecentGigListings();

        Assert.Equal(350, gigs.ElementAt(0).Budget);
    }

    [Fact]
    public async Task Test_GigStatusIsOpen()
    {
        var executorMock = new Mock<IQueryBuilder>();
        var queryMock = new Mock<IQuery>();

        executorMock.Setup(c => c.CreateQuery(It.IsAny<string>())).Returns(queryMock.Object);
        queryMock.Setup(q => q.ExecuteAsync()).Returns(rows.ToAsyncEnumerable());

        var repository = new GigListingRepository(executorMock.Object);
        var gigs = await repository.GetRecentGigListings();

        Assert.Equal("Open", gigs.ElementAt(0).Status);
    }

    [Fact]
    public async Task Test_EmptyGigInsert()
    {
        var executorMock = new Mock<IQueryBuilder>();
        var queryMock = new Mock<IQuery>();
        executorMock.Setup(c => c.CreateQuery(It.IsAny<string>())).Returns(queryMock.Object);
        queryMock
            .Setup(q => q.ExecuteAsync())
            .Returns(Array.Empty<SimpleRow>().ToAsyncEnumerable());

        var repository = new GigListingRepository(executorMock.Object);
        var gigs = await repository.GetRecentGigListings();

        Assert.Empty(gigs);
    }
}
