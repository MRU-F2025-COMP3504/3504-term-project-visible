namespace visible.Server.Configuration;

public static class ConfigurationManagerExtensions
{ 
    /// <summary>
    /// Adds DockerSecretsConfiguration to the app's configuration manager
    /// </summary>
    public static ConfigurationManager AddSecretsConfiguration(this ConfigurationManager manager)
    {
        IConfigurationBuilder configurationBuilder = manager;
        configurationBuilder.Add(new SecretsConfigurationSource());
        return manager;
    }
}
