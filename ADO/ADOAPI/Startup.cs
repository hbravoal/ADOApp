using ADOAPI.Application;
using ADOAPI.Extensions;
using ADOAPI.Identity;
using ADOAPI.Persistence;

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
            services.AddSwaggerGen();
            services.AddIdentityInfrastructure(_config);
            services.AddPersistenceInfrastructure(_config);
            services.AddApplicationLayer();
            services.AddControllers();
            services.AddSwaggerExtension();
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
            app.UseSwaggerUI(options =>
            {
                options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
                options.RoutePrefix = string.Empty;
            });
            app.UseHealthChecks("/health");
            
            app.UseEndpoints(endpoints =>
             {
                 endpoints.MapControllers();
             });
        }
    }
}
