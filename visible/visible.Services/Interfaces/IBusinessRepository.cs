using visible.Services.Models;

namespace visible.Services.Interfaces
{
    /// <summary>
    /// This interface defines the contract for accessing and modifying business profile data.
    /// </summary>
    public interface IBusinessRepository
    {
        /// <summary>
        /// returns all business profiles
        /// </summary>
        Task<IEnumerable<Business>> GetAllBusinesses();

        /// <summary>
        /// search by business name
        /// </summary>
        Task<Business?> GetBusinessByName(string businessName);

        /// <summary>
        /// Creates a new business profile linked to an existing user.
        /// </summary>
        /// <param name="business">The business object containing user ID and profile details.</param>
        /// <returns>The ID of the newly created business.</return
        Task<long> CreateBusinessProfile(Business business);
    }
}
