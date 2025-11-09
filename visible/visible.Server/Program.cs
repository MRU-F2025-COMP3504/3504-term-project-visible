using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
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
var jwtKey = builder.Configuration["jwtKey"];
var jwtIssuer = builder.Configuration["jwtIssuer"];

builder.Services.AddScoped<IQueryBuilder, NpgsqlQueryBuilder>(p => new NpgsqlQueryBuilder(
    connectionString
));
builder.Services.AddSingleton<InitService>();
builder.Services.AddSingleton<IGigListingRepository, GigListingRepository>();
builder.Services.AddSingleton<IAuthenticationRepository, AuthenticationRepository>();
builder.Services.AddScoped<IInfluencerRepository, InfluencerRepository>();
builder.Services.AddSingleton<IConfiguration>(builder.Configuration);
builder
    .Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = jwtIssuer,
            ValidAudience = jwtIssuer,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey)),
        };
    });
builder.Services.AddAuthorization();

var app = builder.Build();

var dataPath = builder.Configuration["DataPath"];
var initService = app.Services.GetService<InitService>();
await initService.InitializeDatabase(dataPath);

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthentication();
app.UseAuthorization();
app.UseHttpsRedirection();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
