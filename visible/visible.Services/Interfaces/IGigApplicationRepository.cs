using visible.Services.Models;

namespace visible.Services.Interfaces;

/// <summary>
/// This interface defines the contract for submitting and modifying applications to a gig listing.
/// </summary>
public interface IGigApplicationRepository
{
    Task<bool> CreateNewGigListingApplication(GigApplication application);
}
