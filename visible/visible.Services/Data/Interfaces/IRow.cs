namespace visible.Services.Data.Interfaces;

/// <summary>
/// Provides an interface for selected values from a returned row
/// </summary>
public interface IRow
{
    object GetColumn(string columnName);
}
