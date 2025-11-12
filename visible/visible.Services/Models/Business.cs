namespace visible.Services.Models;

public class Business
{
    public long BusinessId { get; set; }
    public long UserId { get; set; }
    public string BusinessName { get; set; } = string.Empty;
    public string Location { get; set; } = string.Empty;
    public string Industry { get; set; } = string.Empty;
    public string? DisplayImage { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}
