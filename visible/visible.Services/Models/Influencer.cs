namespace visible.Services.Models;

public class Influencer
{
    public int InfluencerId { get; set; }
    public string? DisplayName { get; set; }
    public string? Bio { get; set; }
    public string? Avatar { get; set; }
    public string? Portfolio { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}
