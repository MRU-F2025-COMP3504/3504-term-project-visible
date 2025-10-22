using visible.Services.Models;

namespace visible.Services.Interfaces;

/// <summary>
/// This class serves as the storage and access provider for Gig Listings.
/// </summary>
public interface IGigListingRepository
{
    /// <summary>
    /// Queries the database for recent gig listings
    /// </summary>
    /// <returns> A list of GigListing objects to be displayed on the client side. </returns>
    Task<IEnumerable<GigListing>> GetRecentGigListings();
}
