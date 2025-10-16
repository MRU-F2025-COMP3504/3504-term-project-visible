using visible.Services;

namespace visible.Services;

public class GigListingService : IGigListingService
{
    private static readonly GigListing[] Summaries = new GigListing[]
        {
            new GigListing{Author="Canela", Description="New Product", Budget="$300"},
            new GigListing{Author = "Euphoria", Description = "Open Mic Host", Budget = "$250"},
        };
    
            public IEnumerable<GigListing> GetGigListings()
    {
    return Summaries.ToArray();

    }
}

