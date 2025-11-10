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
    // [Fact]
    // public async Task Test_GetCorrectGigsCount()
    // {
    //     // Arrange - create the necessary mocks to validate database functionality
    //     var executorMock = new Mock<IQueryBuilder>();
    //     var queryMock = new Mock<IQuery>();
    //     var rows = new[]
    //     {
    //         new SimpleRow(
    //             new Dictionary<string, object>
    //             {
    //                 { "id", "1" },
    //                 { "author", "Canela" },
    //                 { "description", "New Product Launch" },
    //                 { "budget", 500 },
    //             }
    //         ),
    //         new SimpleRow(
    //             new Dictionary<string, object>
    //             {
    //                 { "id", "2" },
    //                 { "author", "Euphoria" },
    //                 { "description", "Open Mic Night" },
    //                 { "budget", 500 },
    //             }
    //         ),
    //     };
    //
    //     executorMock.Setup(c => c.CreateQuery(It.IsAny<string>())).Returns(queryMock.Object);
    //     queryMock.Setup(q => q.ExecuteAsync()).Returns(rows.ToAsyncEnumerable());
    //
    //     // Act - test existing functionality in the database infrastructure
    //     var repository = new GigListingRepository(executorMock.Object);
    //     var gigs = await repository.GetRecentGigListings();
    //
    //     // Assert
    //     Assert.Equal(2, gigs.Count());
    // }
}
