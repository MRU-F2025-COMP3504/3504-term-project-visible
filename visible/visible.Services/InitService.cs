using visible.Services.Data.Interfaces;

namespace visible.Services;

public class InitService(IQueryBuilder builder)
{
    /// <summary>
    /// Initializes the database on application startup.
    /// </summary>
    public async Task InitializeDatabase(string dataPath)
    {
        var initSql = File.ReadAllText(dataPath + "init.sql");
        var query = builder.CreateQuery(initSql);
        await query.ExecuteNonQueryAsync();
    }
}
