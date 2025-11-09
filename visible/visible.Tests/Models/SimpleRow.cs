using visible.Services.Data.Interfaces;

namespace visible.Tests.Models;

public class SimpleRow(Dictionary<string, object> columns) : IRow
{
    private Dictionary<string, object> Columns { get; } = columns;

    public object GetColumn(string columnName)
    {
        return Columns[columnName];
    }
}
