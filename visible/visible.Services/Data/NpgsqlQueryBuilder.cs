using visible.Services.Data.Interfaces;

namespace visible.Services.Data;

public class NpgsqlQueryBuilder(string connectionString) : IQueryBuilder
{
    public IQuery CreateQuery(string query)
    {
        return new NpgsqlQuery(connectionString, query);
    }
}
