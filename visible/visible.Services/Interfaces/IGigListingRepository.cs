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

    /// <summary>
    /// Creates a new entry in the GigListing table.
    /// </summary>
    /// <param name="gigListing"> The Gig Listing object to be added to the database. </param>
    /// <returns> If the Gig Listing was successfully created </returns>
    Task<bool> CreateNewGigListing(GigListing gigListing);
}
