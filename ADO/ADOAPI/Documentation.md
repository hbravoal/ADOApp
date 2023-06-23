# Install docker
## DOcker image: https://hub.docker.com/_/microsoft-azure-sql-edge


docker run --cap-add SYS_PTRACE -e 'ACCEPT_EULA=1' -e 'MSSQL_SA_PASSWORD=yourStrong(!)Password' -p 1433:1433 --name azuresqledge -d mcr.microsoft.com/azure-sql-edge


# Running migrations
# If no have migrations :
dotnet tool install --global dotnet-ef

## Create migration
/usr/local/share/dotnet/dotnet ef migrations add --project ADOAPI.Identity/ADOAPI.Identity.csproj --startup-project ADOAPI/ADOAPI.csproj --context ADOAPI.Identity.Contexts.IdentityContext --configuration Debug Initial --output-dir Migrations
## Update database

/usr/local/share/dotnet/dotnet ef database update --project ADOAPI.Identity/ADOAPI.Identity.csproj --startup-project ADOAPI/ADOAPI.csproj --context ADOAPI.Identity.Contexts.IdentityContext --configuration Debug 20230623031435_Initial



dotnet publish /p:Configuration=Release /p:EnvironmentName=Staging