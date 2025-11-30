using visible.Services.Models;

namespace visible.Services.Interfaces;

/// <summary>
/// This interface defines the contract for accessing data for a specific user.
/// </summary>
public interface IProfileRepository
{
    /// <summary>
    /// Queries the user table for first and last name based on user ID
    /// </summary>
    /// <param name="userId"> The user id to query for in the user table </param>
    /// <returns> The user's first and last name. </returns>
    Task<User> GetUserProfile(int userId);

    /// <summary>
    /// Queries the Business table for all business profiles associated with a given user.
    /// </summary>
    /// <param name="userId"> The user id to query for in the business table </param>
    /// <returns> Businesses related to the specified user </returns>
    Task<IEnumerable<Business>> GetBusinesses(int userId);

    /// <summary>
    /// Queries the Influencer table for all influencer profiles associated with a given user.
    /// </summary>
    /// <param name="userId"> The user id to query for in the influencer table </param>
    /// <returns> Influencers related to the specified user </returns>
    Task<IEnumerable<Influencer>> GetInfluencers(int userId);
}
