using Npgsql;
using visible.Server.Configuration;
using visible.Services;
using visible.Services.Data;
using visible.Services.Data.Interfaces;
using visible.Services.Interfaces;
using visible.Services.Repositories;

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

builder.Services.AddScoped<IQueryBuilder, NpgsqlQueryBuilder>(p => new NpgsqlQueryBuilder(
    connectionString
));
builder.Services.AddSingleton<InitService>();
builder.Services.AddSingleton<IGigListingRepository, GigListingRepository>();
builder.Services.AddSingleton<IAuthenticationRepository, AuthenticationRepository>();

var app = builder.Build();

var dataPath = builder.Configuration["DataPath"];
var initService = app.Services.GetService<InitService>();
await initService.InitializeDatabase(dataPath);

app.UseDefaultFiles();

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
