namespace visible.Services;

public class GigListing(int Id, string? Author, string? Description, int Budget)
{
    public int Id { get; set; } = Id;
    public string? Author { get; set; } = Author;
    public string? Description { get; set; } = Description;
    public int Budget { get; set; } = Budget;
}