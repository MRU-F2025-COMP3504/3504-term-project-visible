namespace visible.Services.Models;

public class User
{
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public List<Influencer>? InfluencerProfiles { get; set; } = new();
    public List<Business>? BusinessProfiles { get; set; } = new();
}
