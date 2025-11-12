namespace visible.Services.Models;

public class GigApplication
{
    public int GigId { get; set; }
    public int ApplicantId { get; set; }
    public string? ApplicationText { get; set; } = string.Empty;
    public string Status { get; set; } = "Submitted";
    public DateTime Deadline { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now.ToLocalTime();
    public DateTime UpdatedAt { get; set; } = DateTime.Now.ToLocalTime();
}
