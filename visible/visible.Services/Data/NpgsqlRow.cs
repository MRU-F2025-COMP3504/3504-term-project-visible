using Npgsql;
using visible.Services.Data.Interfaces;

namespace visible.Services.Data;

public class NpgsqlRow(NpgsqlDataReader reader) : IRow
{
    public object GetColumn(string columnName)
    {
        return reader[columnName];
    }
}
