using Npgsql;
using visible.Server;
using visible.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Adds the Docker Secrets configuration
builder.Configuration.AddSecretsConfiguration();

var password = builder.Configuration["postgres_user_password"];
var connectionString = builder.Configuration.GetConnectionString("PostgreDB") + password + ";";

builder.Services.AddScoped(provider => new NpgsqlConnection(connectionString));
builder.Services.AddSingleton<IGigListingRepository, GigListingRepository>();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
