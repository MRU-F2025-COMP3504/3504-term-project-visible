namespace visible.Server;

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

/// <summary>
/// Configuration provider for Docker secrets
/// </summary>
public sealed class SecretsConfigurationProvider : ConfigurationProvider
{
    /// <summary>
    /// Reads all available secrets into configuration data for ease of access.
    /// </summary>
    /// <exception cref="FileNotFoundException"> If secrets path does not exist </exception>
    public override void Load()
    {
        var secrets = new Dictionary<string, string?>();
        const string path = "/run/secrets/";
        if (!Directory.Exists(path)) throw new FileNotFoundException(path);
        foreach (var filePath in Directory.GetFiles(path))
        {
            var key = Path.GetFileName(filePath);
            var value = File.ReadAllText(filePath);
            secrets.Add(key, value);
        }

        Data = secrets;
    }
}