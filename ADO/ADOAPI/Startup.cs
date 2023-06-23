using System.Security.Cryptography.X509Certificates;
using ADOAPI.Identity;
using ADOAPI.Identity.Contexts;
using ADOAPI.Persistence;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.EntityFrameworkCore;

namespace ADOAPI
{
    public class Startup
    {
        public IConfiguration _config { get; }

        public Startup(IConfiguration configuration )
        {
            _config = configuration;
            
        }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<IdentityContext>(options =>
                options.UseSqlServer(
                    _config.GetConnectionString("IdentityConnection"),
                    b => b.MigrationsAssembly(typeof(IdentityContext).Assembly.FullName)));

            services.AddIdentityInfrastructure(_config);
            services.AddPersistenceInfrastructure(_config);
            services.AddControllers();
            services.AddHealthChecks();


        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            
           
            if(env.IsDevelopment() || env.IsStaging())
            {


                app.UseSwagger();
                app.UseSwaggerUI();
                app.UseDeveloperExceptionPage();

            }

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();
            
            app.UseHealthChecks("/health");
            
            app.UseEndpoints(endpoints =>
             {
                 endpoints.MapControllers();
             });
        }
    }
}
