using Moq;
using visible.Services.Data.Interfaces;
using visible.Services.Models;
using visible.Services.Repositories;
using visible.Tests.Models;

namespace visible.Tests.Services;

public class AuthenticationRepositoryTests
{
    [Fact]
    public async Task Test_CanSignInUser()
    {
        var builderMock = new Mock<IQueryBuilder>();
        var queryMock = new Mock<IQuery>();
        var rows = new[] { new SimpleRow(new Dictionary<string, object> { { "c", 1 } }) };

        builderMock.Setup(c => c.CreateQuery(It.IsAny<string>())).Returns(queryMock.Object);
        queryMock.Setup(q => q.AddParameter("@username", "test@test.com"));
        queryMock.Setup(q => q.AddParameter("@password", "test123"));
        queryMock.Setup(q => q.ExecuteAsync()).Returns(rows.ToAsyncEnumerable());

        var repository = new AuthenticationRepository(builderMock.Object);
        var success = await repository.SignInAsync(
            new SignInRequest { Username = "test@test.com", Password = "test123" }
        );

        Assert.True(success);
    }

    [Fact]
    public async Task Test_SearchForUser_DoesNotExist()
    {
        var builderMock = new Mock<IQueryBuilder>();
        var queryMock = new Mock<IQuery>();
        var rows = new[] { new SimpleRow(new Dictionary<string, object> { { "c", 0 } }) };

        builderMock.Setup(c => c.CreateQuery(It.IsAny<string>())).Returns(queryMock.Object);
        queryMock.Setup(q => q.AddParameter("@username", "amy@thecaufields.ca"));
        queryMock.Setup(q => q.ExecuteAsync()).Returns(rows.ToAsyncEnumerable());

        var repository = new AuthenticationRepository(builderMock.Object);
        var success = await repository.SearchForUserAsync(
            new SignupRequest
            {
                Username = "afcaufield@gmail.com",
                Password = "test123",
                FirstName = "Amy",
                LastName = "Caufield",
            }
        );

        Assert.False(success);
    }

    [Fact]
    public async Task Test_SearchForUser_DoesExist()
    {
        // Arrange
        var builderMock = new Mock<IQueryBuilder>();
        var queryMock = new Mock<IQuery>();
        var rows = new[] { new SimpleRow(new Dictionary<string, object> { { "c", 1 } }) };

        builderMock.Setup(c => c.CreateQuery(It.IsAny<string>())).Returns(queryMock.Object);
        queryMock.Setup(q => q.AddParameter("@username", "amy@thecaufields.ca"));
        queryMock.Setup(q => q.ExecuteAsync()).Returns(rows.ToAsyncEnumerable());

        // Act
        var repository = new AuthenticationRepository(builderMock.Object);
        var success = await repository.SearchForUserAsync(
            new SignupRequest
            {
                Username = "amy@thecaufields.ca",
                Password = "test123",
                FirstName = "Amy",
                LastName = "Caufield",
            }
        );

        // Assert
        Assert.True(success);
    }
}
