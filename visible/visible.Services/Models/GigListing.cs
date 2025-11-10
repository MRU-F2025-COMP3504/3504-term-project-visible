namespace visible.Services.Models;

public class GigListing
{
    public int GigId { get; set; }
    public int BusinessId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Location { get; set; } = string.Empty;
    public int Budget { get; set; }
    public string? Requirements { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public DateTime Deadline { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now.ToLocalTime();
    public DateTime UpdatedAt { get; set; } = DateTime.Now.ToLocalTime();
}
