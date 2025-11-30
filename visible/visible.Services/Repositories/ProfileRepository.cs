using visible.Services.Data.Interfaces;
using visible.Services.Interfaces;
using visible.Services.Models;

namespace visible.Services.Repositories;

public class ProfileRepository(IQueryBuilder builder) : IProfileRepository
{
    public async Task<User> GetUserProfile(int userId)
    {
        var user = new User();
        var businesses = new List<Business>();
        var influencers = new List<Influencer>();
        var searchString = "SELECT first_name, last_name FROM users WHERE user_id = @userId";
        var query = builder.CreateQuery(searchString);
        query.AddParameter("@userId", userId);
        await foreach (var row in query.ExecuteAsync())
        {
            user.FirstName = Convert.ToString(row.GetColumn("first_name"));
            user.LastName = Convert.ToString(row.GetColumn("last_name"));
        }

        return user;
    }

    public async Task<IEnumerable<Business>> GetBusinesses(int userId)
    {
        var businessSearchString = "SELECT * FROM businesses WHERE user_id = @userId";
        var businessQuery = builder.CreateQuery(businessSearchString);
        businessQuery.AddParameter("@userId", userId);
        var businesses = new List<Business>();
        await foreach (var row in businessQuery.ExecuteAsync())
        {
            businesses.Add(
                new Business
                {
                    BusinessId = Convert.ToInt32(row.GetColumn("business_id")),
                    BusinessName = Convert.ToString(row.GetColumn("business_name")),
                    Location = Convert.ToString(row.GetColumn("location")),
                    Industry = Convert.ToString(row.GetColumn("industry")),
                    DisplayImage = Convert.ToString(row.GetColumn("display_image")),
                    CreatedAt = Convert.ToDateTime(row.GetColumn("created_at")),
                    UpdatedAt = Convert.ToDateTime(row.GetColumn("updated_at")),
                }
            );
        }

        return businesses;
    }

    public async Task<IEnumerable<Influencer>> GetInfluencers(int userId)
    {
        var influencerSearchString = "SELECT * FROM influencers WHERE user_id = @userId";
        var influencerQuery = builder.CreateQuery(influencerSearchString);
        influencerQuery.AddParameter("@userId", userId);

        var influencers = new List<Influencer>();

        await foreach (var row in influencerQuery.ExecuteAsync())
        {
            influencers.Add(
                new Influencer
                {
                    InfluencerId = Convert.ToInt32(row.GetColumn("influencer_id")),
                    DisplayName = Convert.ToString(row.GetColumn("display_name")),
                    Bio = Convert.ToString(row.GetColumn("bio")),
                    Avatar = Convert.ToString(row.GetColumn("avatar")),
                    Portfolio = Convert.ToString(row.GetColumn("portfolio")),
                    CreatedAt = Convert.ToDateTime(row.GetColumn("created_at")),
                    UpdatedAt = Convert.ToDateTime(row.GetColumn("updated_at")),
                }
            );
        }

        return influencers;
    }
}
