using Npgsql;
using visible.Services.Data.Interfaces;

namespace visible.Services.Data;

public class NpgsqlQuery : IQuery, IDisposable
{
    private readonly NpgsqlConnection _connection;
    private readonly NpgsqlCommand _command;

    public NpgsqlQuery(string connection, string query)
    {
        _connection = new NpgsqlConnection(connection);
        _command = _connection.CreateCommand();
        _command.CommandText = query;
    }

    public async IAsyncEnumerable<IRow> ExecuteAsync()
    {
        await _connection.OpenAsync();
        await _command.PrepareAsync();
        using var reader = await _command.ExecuteReaderAsync();
        while (await reader.ReadAsync())
        {
            yield return new NpgsqlRow(reader);
        }
        await _connection.CloseAsync();
    }

    public async Task<int> ExecuteNonQueryAsync()
    {
        while (true)
        {
            try
            {
                await _connection.OpenAsync();
                break;
            }
            catch (NpgsqlException) { }
        }
        await _command.PrepareAsync();
        int returnValue = await _command.ExecuteNonQueryAsync();
        await _connection.CloseAsync();
        return returnValue;
    }

    public void AddParameter(string name, object value)
    {
        _command.Parameters.AddWithValue(name, value);
    }

    public void Dispose()
    {
        _connection.Dispose();
    }
}
