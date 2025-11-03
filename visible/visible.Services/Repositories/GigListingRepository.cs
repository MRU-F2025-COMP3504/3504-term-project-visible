using visible.Services.Data.Interfaces;
using visible.Services.Interfaces;
using visible.Services.Models;

namespace visible.Services.Repositories;

/// <summary>
/// The implementation of IGigListingsRepository interface
/// </summary>
/// <param name="builder"> Connection to the Postgresql database </param>
public class GigListingRepository(IQueryBuilder builder) : IGigListingRepository
{
    public async Task<IEnumerable<GigListing>> GetRecentGigListings()
    {
        var gigs = new List<GigListing>();

        var query = builder.CreateQuery("SELECT id, author, description, budget FROM gigs");

        await foreach (var row in query.ExecuteAsync())
        {
            gigs.Add(
                new GigListing(
                    Convert.ToInt32(row.GetColumn("id")),
                    Convert.ToString(row.GetColumn("author")),
                    Convert.ToString(row.GetColumn("description")),
                    Convert.ToInt32(row.GetColumn("budget"))
                )
            );
        }

        return gigs.ToList();
    }
}
