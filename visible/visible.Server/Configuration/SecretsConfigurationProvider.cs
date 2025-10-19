namespace visible.Server.Configuration;

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
