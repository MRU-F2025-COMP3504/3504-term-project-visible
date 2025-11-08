using System.Data;
using Npgsql;
using visible.Services.Interfaces;
using visible.Services.Models;

namespace visible.Services.Repositories;

/// <summary>
/// Handles all database operations related to business profiles:
/// - Retrieve all businesses
/// - Retrieve one business by name
/// - Create new business profiles linked to users
/// </summary>
public class BusinessRepository(NpgsqlConnection connection) : IBusinessRepository, IDisposable
{
    public void Dispose()
    {
        if (connection.State != ConnectionState.Closed) connection.Close();
        GC.SuppressFinalize(this);
    }

    /// <summary>
    /// Retrieves all business profiles from the database.
    /// </summary>
    public async Task<IEnumerable<Business>> GetAllBusinesses()
    {
        var businesses = new List<Business>();
        using var cmd = connection.CreateCommand();
        cmd.CommandText = @"
            SELECT business_id, user_id, business_name, location, industry, display_image, created_at, updated_at
            FROM businesses";

        await connection.OpenAsync();
        using var reader = await cmd.ExecuteReaderAsync();

        while (await reader.ReadAsync())
        {
            businesses.Add(new Business
            {
                BusinessId = Convert.ToInt32(reader["business_id"]),
                UserId = Convert.ToInt32(reader["user_id"]),
                BusinessName = Convert.ToString(reader["business_name"]),
                Location = Convert.ToString(reader["location"]),
                Industry = Convert.ToString(reader["industry"]),
                DisplayImage = reader["display_image"]?.ToString(),
                CreatedAt = Convert.ToDateTime(reader["created_at"]),
                UpdatedAt = Convert.ToDateTime(reader["updated_at"])
            });
        }

        await connection.CloseAsync();
        return businesses;
    }

    /// <summary>
    /// Retrieves a specific business by its name.
    /// </summary>
    public async Task<Business?> GetBusinessByName(string businessName)
    {
        Business? business = null;
        using var cmd = connection.CreateCommand();
        cmd.CommandText = @"
            SELECT business_id, user_id, business_name, location, industry, display_image, created_at, updated_at
            FROM businesses
            WHERE business_name = @business_name";
        cmd.Parameters.AddWithValue("@business_name", businessName);

        await connection.OpenAsync();
        using var reader = await cmd.ExecuteReaderAsync();

        if (await reader.ReadAsync())
        {
            business = new Business
            {
                BusinessId = Convert.ToInt32(reader["business_id"]),
                UserId = Convert.ToInt32(reader["user_id"]),
                BusinessName = Convert.ToString(reader["business_name"]),
                Location = Convert.ToString(reader["location"]),
                Industry = Convert.ToString(reader["industry"]),
                DisplayImage = reader["display_image"]?.ToString(),
                CreatedAt = Convert.ToDateTime(reader["created_at"]),
                UpdatedAt = Convert.ToDateTime(reader["updated_at"])
            };
        }

        await connection.CloseAsync();
        return business;
    }

    /// <summary>
    /// Creates a new business profile and returns its ID.
    /// </summary>
    public async Task<long> CreateBusinessProfile(Business business)
    {
        using var cmd = connection.CreateCommand();
        cmd.CommandText = @"
            INSERT INTO businesses (user_id, business_name, location, industry, display_image)
            VALUES (@user_id, @business_name, @location, @industry, @display_image)
            RETURNING business_id";

        cmd.Parameters.AddWithValue("@user_id", business.UserId);
        cmd.Parameters.AddWithValue("@business_name", business.BusinessName);
        cmd.Parameters.AddWithValue("@location", business.Location);
        cmd.Parameters.AddWithValue("@industry", business.Industry);
        cmd.Parameters.AddWithValue("@display_image", business.DisplayImage ?? (object)DBNull.Value);

        await connection.OpenAsync();
        var newId = Convert.ToInt64(await cmd.ExecuteScalarAsync());
        await connection.CloseAsync();

        return newId;
    }
}
