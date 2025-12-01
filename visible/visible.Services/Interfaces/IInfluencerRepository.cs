using visible.Services.Models;

namespace visible.Services.Interfaces
{
    /// <summary>
    /// This interface defines the contract for accessing and modifying Influencer profile data.
    /// </summary>
    public interface IInfluencerRepository
    {
        /// <summary>
        /// Retrieves all influencer profiles from the database.
        /// </summary>
        Task<IEnumerable<Influencer>> GetAllInfluencers();

        /// <summary>
        /// Retrieves a specific influencer profile by the user's email address.
        /// </summary>
        Task<Influencer?> GetInfluencerByEmail(string email);

        /// <summary>
        /// Creates a new influencer profile linked to an existing user.
        /// </summary>
        /// <param name="influencer">The influencer object containing user ID and profile details.</param>
        /// <returns>The ID of the newly created influencer.</returns>
        Task<int> CreateInfluencerProfile(Influencer influencer, int id);
    }
}
