namespace visible.Services;

public interface IGigListingService
{
    IEnumerable<GigListing> GetGigListings();
}