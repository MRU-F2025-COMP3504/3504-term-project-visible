using Npgsql;

namespace visible.Services;

public class InitService(NpgsqlConnection connection)
{
    /// <summary>
    /// Initializes the database on application startup.
    /// </summary>
    public async Task InitializeDatabase(string dataPath)
    {
        var initSql = File.ReadAllText(dataPath + "init.sql");
        using var cmd = connection.CreateCommand();
        cmd.CommandText = initSql;
        while (true)
        {
            // Loop until successful connection, in case database is not ready
            try
            {
                await connection.OpenAsync();
            }
            catch
            {
                continue;
            }
            break;
        }
        // Execute the SQL to create/update tables
        await cmd.ExecuteNonQueryAsync();
        await connection.CloseAsync();
    }
}
