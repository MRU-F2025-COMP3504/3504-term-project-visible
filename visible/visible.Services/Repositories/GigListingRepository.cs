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

        var query = builder.CreateQuery(
            @"SELECT g.gig_id, g.business_id, b.business_name, g.title, g.description, g.location, g.budget, g.requirements, g.status, g.application_deadline, g.created_at, g.updated_at FROM gig_listings g LEFT JOIN businesses b ON g.business_id = b.business_id"
        );

        await foreach (var row in query.ExecuteAsync())
        {
            gigs.Add(
                new GigListing
                {
                    GigId = Convert.ToInt32(row.GetColumn("gig_id")),
                    BusinessId = Convert.ToInt32(row.GetColumn("business_id")),
                    BusinessName = Convert.ToString(row.GetColumn("business_name")),
                    Title = Convert.ToString(row.GetColumn("title")),
                    Description = Convert.ToString(row.GetColumn("description")),
                    Location = Convert.ToString(row.GetColumn("location")),
                    Budget = Convert.ToInt32(row.GetColumn("budget")),
                    Requirements = Convert.ToString(row.GetColumn("requirements")),
                    Status = Convert.ToString(row.GetColumn("status")),
                    Deadline = Convert.ToDateTime(row.GetColumn("application_deadline")),
                    CreatedAt = Convert.ToDateTime(row.GetColumn("created_at")),
                    UpdatedAt = Convert.ToDateTime(row.GetColumn("updated_at")),
                }
            );
        }

        return gigs.ToList();
    }

    public async Task<bool> CreateNewGigListing(GigListing gigListing)
    {
        string createStatement =
            "INSERT INTO gig_listings (business_id, title, description, location, budget, requirements, status, application_deadline) VALUES (@business_id, @title, @description, @location, @budget, @requirements, @status, @application_deadline)";

        var query = builder.CreateQuery(createStatement);
        query.AddParameter("@business_id", gigListing.BusinessId);
        query.AddParameter("@title", gigListing.Title);
        query.AddParameter("@description", gigListing.Description);
        query.AddParameter("@location", gigListing.Location);
        query.AddParameter("@budget", gigListing.Budget);
        query.AddParameter("@requirements", gigListing.Requirements);
        query.AddParameter("@status", gigListing.Status);
        query.AddParameter("@application_deadline", gigListing.Deadline);

        int rowsAffected = await query.ExecuteNonQueryAsync();

        return rowsAffected == 1;
    }
}
