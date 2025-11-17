using visible.Services.Models;

namespace visible.Services.Interfaces;

public interface IGigApplicationRepository
{
    Task<bool> CreateNewGigListingApplication(GigApplication application);
}
