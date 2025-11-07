namespace visible.Services.Data.Interfaces;

/// <summary>
/// Represents an active query to the database.
/// </summary>
public interface IQuery
{
    /// <summary>
    /// Execute the provided query.
    /// </summary>
    /// <returns> An enumerable over the returned rows of the query </returns>
    IAsyncEnumerable<IRow> ExecuteAsync();

    /// <summary>
    /// Configures query parameters for prepared statements
    /// </summary>
    /// <param name="name"> The parameter name </param>
    /// <param name="value"> The parameter's value </param>
    void AddParameter(string name, object value);

    /// <summary>
    /// Execute an operation that does not return rows
    /// </summary>
    /// <returns> The asynchronous Task's completion </returns>
    Task<int> ExecuteNonQueryAsync();
}
