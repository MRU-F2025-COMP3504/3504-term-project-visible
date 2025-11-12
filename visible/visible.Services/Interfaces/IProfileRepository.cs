using visible.Services.Models;

namespace visible.Services.Interfaces;

public interface IProfileRepository
{
    Task<User> GetUserProfile(int userId);
    Task<IEnumerable<Business>> GetBusinesses(int userId);
    Task<IEnumerable<Influencer>> GetInfluencers(int userId);
}
