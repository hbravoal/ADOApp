# Install docker
## DOcker image: https://hub.docker.com/_/microsoft-azure-sql-edge


docker run --cap-add SYS_PTRACE -e 'ACCEPT_EULA=1' -e 'MSSQL_SA_PASSWORD=yourStrong(!)Password' -p 1433:1433 --name azuresqledge -d mcr.microsoft.com/azure-sql-edge


# Running migrations
# If no have migrations :
dotnet tool install --global dotnet-ef

## Create migration
/usr/local/share/dotnet/dotnet ef migrations add --project ADOAPI.Identity/ADOAPI.Identity.csproj --startup-project ADOAPI/ADOAPI.csproj --context ADOAPI.Identity.Contexts.IdentityContext --configuration Debug Initial --output-dir Migrations
/usr/local/share/dotnet/dotnet ef migrations add --project ADOAPI.Persistence/ADOAPI.Persistence.csproj --startup-project ADOAPI/ADOAPI.csproj --context ADOAPI.Persistence.Contexts.ApplicationDbContext --configuration Debug Initial --output-dir Migrations

## Update database

/usr/local/share/dotnet/dotnet ef database update --project ADOAPI.Identity/ADOAPI.Identity.csproj --startup-project ADOAPI/ADOAPI.csproj --context ADOAPI.Identity.Contexts.IdentityContext --configuration Debug 20230623031435_Initial
/usr/local/share/dotnet/dotnet ef database update --project ADOAPI.Persistence/ADOAPI.Persistence.csproj --startup-project ADOAPI/ADOAPI.csproj --context ADOAPI.Persistence.Contexts.ApplicationDbContext --configuration Debug 20230623183128_Initial --connection "Data Source=localhost;Initial Catalog=dbADO;User Id=sa;Password=yourStrong(!)Password;"




dotnet publish /p:Configuration=Release /p:EnvironmentName=Staging