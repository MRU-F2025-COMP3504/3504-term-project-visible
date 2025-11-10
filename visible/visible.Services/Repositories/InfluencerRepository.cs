using visible.Services.Data.Interfaces;
using visible.Services.Interfaces;
using visible.Services.Models;

namespace visible.Services.Repositories;

/// <summary>
/// The implementation of IInfluencerRepository interface.
/// Provides data access methods for managing influencer profiles.
/// </summary>
/// <param name="builder">Connection to the PostgreSQL database.</param>
public class InfluencerRepository(IQueryBuilder builder) : IInfluencerRepository
{
    /// <summary>
    /// Retrieves all influencer profiles from the database.
    /// </summary>
    public async Task<IEnumerable<Influencer>> GetAllInfluencers()
    {
        var influencers = new List<Influencer>();
        string influencerQuery =
            @"
            SELECT influencer_id, user_id, display_name, bio, avatar, portfolio, created_at, updated_at
            FROM influencers";

        var query = builder.CreateQuery(influencerQuery);

        await foreach (var row in query.ExecuteAsync())
        {
            influencers.Add(
                new Influencer
                {
                    InfluencerId = Convert.ToInt32(row.GetColumn("influencer_id")),
                    UserId = Convert.ToInt32(row.GetColumn("user_id")),
                    DisplayName = Convert.ToString(row.GetColumn("display_name")),
                    Bio = Convert.ToString(row.GetColumn("bio")),
                    Avatar = Convert.ToString(row.GetColumn("avatar")),
                    Portfolio = row.GetColumn("portfolio")?.ToString(),
                    CreatedAt = Convert.ToDateTime(row.GetColumn("created_at")),
                    UpdatedAt = Convert.ToDateTime(row.GetColumn("updated_at")),
                }
            );
        }
        return influencers.ToList();
    }

    /// <summary>
    /// Retrieves an influencer profile by the user's email address.
    /// </summary>
    public async Task<Influencer?> GetInfluencerByEmail(string email)
    {
        Influencer? influencer = null;

        string emailQuery =
            @"
            SELECT i.influencer_id, i.user_id, i.display_name, i.bio, i.avatar, i.portfolio,
                   i.created_at, i.updated_at
            FROM influencers i
            JOIN users u ON i.user_id = u.user_id
            WHERE u.email = @Email";
        var query = builder.CreateQuery(emailQuery);

        query.AddParameter("@Email", email);

        await foreach (var row in query.ExecuteAsync())
        {
            influencer = new Influencer
            {
                InfluencerId = Convert.ToInt32(row.GetColumn("influencer_id")),
                UserId = Convert.ToInt32(row.GetColumn("user_id")),
                DisplayName = Convert.ToString(row.GetColumn("display_name")),
                Bio = Convert.ToString(row.GetColumn("bio")),
                Avatar = Convert.ToString(row.GetColumn("avatar")),
                Portfolio = row.GetColumn("portfolio")?.ToString(),
                CreatedAt = Convert.ToDateTime(row.GetColumn("created_at")),
                UpdatedAt = Convert.ToDateTime(row.GetColumn("updated_at")),
            };
        }

        return influencer;
    }

    /// <summary>
    /// Creates a new influencer profile linked to an existing user.
    /// </summary>
    /// <param name="influencer">The influencer object containing the user ID and profile details.</param>
    /// <returns>The ID of the newly created influencer.</returns>
    public async Task<int> CreateInfluencerProfile(Influencer influencer)
    {
        string createStatement =
            @"
            INSERT INTO influencers (user_id, display_name, bio, avatar, portfolio)
            VALUES (@UserId, @DisplayName, @Bio, @Avatar, @Portfolio)
            RETURNING influencer_id";

        var query = builder.CreateQuery(createStatement);
        query.AddParameter("@UserId", influencer.UserId);
        query.AddParameter("@DisplayName", influencer.DisplayName);
        query.AddParameter("@Bio", influencer.Bio);
        query.AddParameter("@Avatar", influencer.Avatar);
        query.AddParameter("@Portfolio", influencer.Portfolio);

        var newId = 0;

        await foreach (var row in query.ExecuteAsync())
        {
            newId = Convert.ToInt32(row.GetColumn("influencer_id"));
        }

        return newId;
    }
}
