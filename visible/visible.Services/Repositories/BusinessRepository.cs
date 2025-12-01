using visible.Services.Data.Interfaces;
using visible.Services.Interfaces;
using visible.Services.Models;

namespace visible.Services.Repositories;

/// <summary>
/// Handles all database operations related to business profiles:
/// - Retrieve all businesses
/// - Retrieve one business by name
/// - Create new business profiles linked to users
/// </summary>
public class BusinessRepository(IQueryBuilder builder) : IBusinessRepository
{
    /// <summary>
    /// Retrieves all business profiles from the database.
    /// </summary>
    public async Task<IEnumerable<Business>> GetAllBusinesses()
    {
        var businesses = new List<Business>();

        string businessesQueryAll =
            @"
            SELECT business_id, user_id, business_name, location, industry, display_image, created_at, updated_at
            FROM businesses";
        var query = builder.CreateQuery(businessesQueryAll);

        await foreach (var row in query.ExecuteAsync())
        {
            businesses.Add(
                new Business
                {
                    BusinessId = Convert.ToInt32(row.GetColumn("business_id")),
                    // UserId = Convert.ToInt32(row.GetColumn("user_id")),
                    BusinessName = Convert.ToString(row.GetColumn("business_name")),
                    Location = Convert.ToString(row.GetColumn("location")),
                    Industry = Convert.ToString(row.GetColumn("industry")),
                    DisplayImage = row.GetColumn("display_image")?.ToString(),
                    CreatedAt = Convert.ToDateTime(row.GetColumn("created_at")),
                    UpdatedAt = Convert.ToDateTime(row.GetColumn("updated_at")),
                }
            );
        }
        return businesses;
    }

    /// <summary>
    /// Retrieves a specific business by its name.
    /// </summary>
    public async Task<Business?> GetBusinessByName(string businessName)
    {
        Business? business = null;

        string bussinessNameQuery =
            @"SELECT business_id, user_id, business_name, location, industry, display_image, created_at, updated_at
            FROM businesses
            WHERE business_name = @business_name";

        var query = builder.CreateQuery(bussinessNameQuery);
        query.AddParameter("@business_name", businessName);

        await foreach (var row in query.ExecuteAsync())
        {
            business = new Business
            {
                BusinessId = Convert.ToInt32(row.GetColumn("business_id")),
                // UserId = Convert.ToInt32(row.GetColumn("user_id")),
                BusinessName = Convert.ToString(row.GetColumn("business_name")),
                Location = Convert.ToString(row.GetColumn("location")),
                Industry = Convert.ToString(row.GetColumn("industry")),
                DisplayImage = row.GetColumn("display_image")?.ToString(),
                CreatedAt = Convert.ToDateTime(row.GetColumn("created_at")),
                UpdatedAt = Convert.ToDateTime(row.GetColumn("updated_at")),
            };
        }
        return business;
    }

    /// <summary>
    /// Creates a new business profile and returns its ID.
    /// </summary>
    public async Task<long> CreateBusinessProfile(Business business, int id)
    {
        string businessProfileCreate =
            @"
            INSERT INTO businesses (user_id, business_name, location, industry, display_image)
            VALUES (@user_id, @business_name, @location, @industry, @display_image)
            RETURNING business_id";

        var query = builder.CreateQuery(businessProfileCreate);

        query.AddParameter("@user_id", id);
        query.AddParameter("@business_name", business.BusinessName);
        query.AddParameter("@location", business.Location);
        query.AddParameter("@industry", business.Industry);
        query.AddParameter("@display_image", business.DisplayImage ?? (object)DBNull.Value);

        var newId = 0;
        await foreach (var row in query.ExecuteAsync())
        {
            newId = Convert.ToInt32(row.GetColumn("business_id"));
        }

        return newId;
    }
}
