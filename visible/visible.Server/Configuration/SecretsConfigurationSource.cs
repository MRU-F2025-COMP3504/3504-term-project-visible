namespace visible.Server.Configuration;

/// <summary>
/// Configuration source for Docker secrets
/// </summary>
public class SecretsConfigurationSource : IConfigurationSource
{
    public IConfigurationProvider Build(IConfigurationBuilder builder)
    {
        return new SecretsConfigurationProvider();
    }
}
