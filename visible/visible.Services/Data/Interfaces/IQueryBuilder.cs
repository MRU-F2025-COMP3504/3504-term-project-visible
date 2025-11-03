namespace visible.Services.Data.Interfaces;

/// <summary>
/// Provides an interface for building database queries.
/// </summary>
public interface IQueryBuilder
{
    /// <summary>
    /// Creates a query to execute for a given operation.
    /// </summary>
    /// <param name="query"> The query string to be executed </param>
    /// <returns> A query object to be run </returns>
    IQuery CreateQuery(string query);
}
