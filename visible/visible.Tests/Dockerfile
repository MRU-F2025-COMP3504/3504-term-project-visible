FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build

WORKDIR /src
COPY ["visible.Server/visible.Server.csproj", "visible.Server/"]
COPY ["visible.Services/visible.Services.csproj", "visible.Services/"]
COPY ["visible.Tests/visible.Tests.csproj", "visible.Tests/"]

RUN dotnet restore "visible.Tests/visible.Tests.csproj"

COPY . .

WORKDIR "/src/visible.Tests"

ENTRYPOINT dotnet test "visible.Tests.csproj"

# FROM build AS publish
# ARG BUILD_CONFIGURATION=Release
# RUN dotnet publish "./visible.Server.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

# FROM base AS final
# WORKDIR /app
# COPY --from=publish /app/publish .
# ENTRYPOINT ["dotnet", "visible.Server.dll"]
