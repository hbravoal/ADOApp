using ADOAPI.Domain.Interfaces.Repository;
using ADOAPI.Persistence.Contexts;
using ADOAPI.Persistence.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace ADOAPI.Persistence
{
    public static class ServiceRegistration
    {
        public static void AddPersistenceInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            if (configuration.GetValue<bool>("UseInMemoryDatabase"))
            {
                services.AddDbContext<ApplicationDbContext>(options =>
                    options.UseInMemoryDatabase("ApplicationDb"));
            }
            else
            {
                services.AddDbContext<ApplicationDbContext>(options =>
               options.UseSqlServer(
                   configuration.GetConnectionString("DefaultConnection"),
                   b => b.MigrationsAssembly(typeof(ApplicationDbContext).Assembly.FullName)));
            }
            #region Repositories
            services.AddTransient(typeof(IGenericRepositoryAsync<>), typeof(GenericRepositoryAsync<>));
            #endregion
            services.AddTransient<IClientRepositoryAsync, ClientRepositoryAsync>();
            services.AddTransient<IDocumentTypeRepositoryAsync,DocumentTypeRepositoryAsync>();
            services.AddTransient<IGenderRepositoryAsync, GenderRepositoryAsync>();

        }
    }
}
