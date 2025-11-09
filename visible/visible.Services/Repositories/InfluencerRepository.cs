using System.Data;
using Npgsql;
using visible.Services.Interfaces;
using visible.Services.Models;

namespace visible.Services.Repositories;

/// <summary>
/// The implementation of IInfluencerRepository interface.
/// Provides data access methods for managing influencer profiles.
/// </summary>
/// <param name="connection">Connection to the PostgreSQL database.</param>
public class InfluencerRepository(NpgsqlConnection connection) : IInfluencerRepository, IDisposable
{
    public void Dispose()
    {
        if (connection.State != ConnectionState.Closed)
            connection.Close();
        GC.SuppressFinalize(this);
    }

    /// <summary>
    /// Retrieves all influencer profiles from the database.
    /// </summary>
    public async Task<IEnumerable<Influencer>> GetAllInfluencers()
    {
        var influencers = new List<Influencer>();
        using var cmd = connection.CreateCommand();
        cmd.CommandText =
            @"
            SELECT influencer_id, user_id, display_name, bio, avatar, portfolio, created_at, updated_at
            FROM influencers";

        await connection.OpenAsync();
        using var reader = await cmd.ExecuteReaderAsync();

        while (await reader.ReadAsync())
        {
            influencers.Add(
                new Influencer
                {
                    InfluencerId = Convert.ToInt32(reader["influencer_id"]),
                    UserId = Convert.ToInt32(reader["user_id"]),
                    DisplayName = Convert.ToString(reader["display_name"]),
                    Bio = Convert.ToString(reader["bio"]),
                    Avatar = Convert.ToString(reader["avatar"]),
                    Portfolio = reader["portfolio"]?.ToString(),
                    CreatedAt = Convert.ToDateTime(reader["created_at"]),
                    UpdatedAt = Convert.ToDateTime(reader["updated_at"]),
                }
            );
        }

        await connection.CloseAsync();
        return influencers.ToList();
    }

    /// <summary>
    /// Retrieves an influencer profile by the user's email address.
    /// </summary>
    public async Task<Influencer?> GetInfluencerByEmail(string email)
    {
        Influencer? influencer = null;
        using var cmd = connection.CreateCommand();
        cmd.CommandText =
            @"
            SELECT i.influencer_id, i.user_id, i.display_name, i.bio, i.avatar, i.portfolio,
                   i.created_at, i.updated_at
            FROM influencers i
            JOIN users u ON i.user_id = u.user_id
            WHERE u.email = @Email";
        cmd.Parameters.AddWithValue("@Email", email);

        await connection.OpenAsync();
        using var reader = await cmd.ExecuteReaderAsync();

        if (await reader.ReadAsync())
        {
            influencer = new Influencer
            {
                InfluencerId = Convert.ToInt32(reader["influencer_id"]),
                UserId = Convert.ToInt32(reader["user_id"]),
                DisplayName = Convert.ToString(reader["display_name"]),
                Bio = Convert.ToString(reader["bio"]),
                Avatar = Convert.ToString(reader["avatar"]),
                Portfolio = reader["portfolio"]?.ToString(),
                CreatedAt = Convert.ToDateTime(reader["created_at"]),
                UpdatedAt = Convert.ToDateTime(reader["updated_at"]),
            };
        }

        await connection.CloseAsync();
        return influencer;
    }

    /// <summary>
    /// Creates a new influencer profile linked to an existing user.
    /// </summary>
    /// <param name="influencer">The influencer object containing the user ID and profile details.</param>
    /// <returns>The ID of the newly created influencer.</returns>
    public async Task<int> CreateInfluencerProfile(Influencer influencer)
    {
        using var cmd = connection.CreateCommand();
        cmd.CommandText =
            @"
            INSERT INTO influencers (user_id, display_name, bio, avatar, portfolio)
            VALUES (@UserId, @DisplayName, @Bio, @Avatar, @Portfolio)
            RETURNING influencer_id";

        cmd.Parameters.AddWithValue("@UserId", influencer.UserId);
        cmd.Parameters.AddWithValue("@DisplayName", influencer.DisplayName ?? (object)DBNull.Value);
        cmd.Parameters.AddWithValue("@Bio", influencer.Bio ?? (object)DBNull.Value);
        cmd.Parameters.AddWithValue("@Avatar", influencer.Avatar ?? (object)DBNull.Value);
        cmd.Parameters.AddWithValue("@Portfolio", influencer.Portfolio ?? (object)DBNull.Value);

        await connection.OpenAsync();
        var newId = Convert.ToInt32(await cmd.ExecuteScalarAsync());
        await connection.CloseAsync();

        return newId;
    }
}
