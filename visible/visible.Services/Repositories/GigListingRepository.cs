using System.Data;
using Npgsql;
using visible.Services.Interfaces;
using visible.Services.Models;

namespace visible.Services.Repositories;

/// <summary>
/// The implementation of IGigListingsRepository interface
/// </summary>
/// <param name="connection"> Connection to the Postgresql database </param>
public class GigListingRepository(NpgsqlConnection connection) : IGigListingRepository, IDisposable
{
    public void Dispose()
    {
        if (connection.State != ConnectionState.Closed)
            connection.Close();
        GC.SuppressFinalize(this);
    }

    public async Task<IEnumerable<GigListing>> GetRecentGigListings()
    {
        var gigs = new List<GigListing>();
        using var cmd = connection.CreateCommand();
        cmd.CommandText = "SELECT id, author, description, budget FROM gigs";
        await connection.OpenAsync();
        using var reader = await cmd.ExecuteReaderAsync();
        while (await reader.ReadAsync())
            gigs.Add(
                new GigListing(
                    Convert.ToInt32(reader["id"]),
                    Convert.ToString(reader["author"]),
                    Convert.ToString(reader["description"]),
                    Convert.ToInt32(reader["budget"])
                )
            );
        await connection.CloseAsync();
        return gigs.ToList();
    }
}
