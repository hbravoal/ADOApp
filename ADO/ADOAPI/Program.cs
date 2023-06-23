using ADOAPI.Identity.Models;
using Microsoft.AspNetCore.Identity;
using NLog.Web;
using Serilog;

namespace ADOAPI
{
    public class Program
    {
        public async static Task Main(string[] args)
        {
            var logger = NLogBuilder.ConfigureNLog("nlog.config").GetCurrentClassLogger();
            try
            {
                logger.Debug("init main");
                var host = CreateHostBuilder(args).Build();
                using (var scope = host.Services.CreateScope())
                {
                    var services = scope.ServiceProvider;
                    var loggerFactory = services.GetRequiredService<ILoggerFactory>();
                      try
                    {
                        var userManager = services.GetRequiredService<UserManager<ApplicationUser>>();
                        var roleManager = services.GetRequiredService<RoleManager<IdentityRole>>();


                        await ADOAPI.Identity.Seeds.DefaultRoles.SeedAsync(userManager, roleManager);
                        await ADOAPI.Identity.Seeds.DefaultSuperAdmin.SeedAsync(userManager, roleManager);
                        await ADOAPI.Identity.Seeds.DefaultBasicUser.SeedAsync(userManager, roleManager);



                        Log.Information("Finished Seeding Default Data");
                        Log.Information("Application Starting");
                    }
                    catch (Exception ex)
                    {
                        Log.Warning(ex, "An error occurred seeding the DB");
                    }
                    finally
                    {
                        Log.CloseAndFlush();
                    }
                }
                host.Run();
            }
            catch (Exception exception)
            {
                //NLog: catch setup errors
                logger.Error(exception, "Stopped program because of exception");
                throw;
            }
            finally
            {
                // Ensure to flush and stop internal timers/threads before application-exit (Avoid segmentation fault on Linux)
                NLog.LogManager.Shutdown();
            }

           
        }
        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                })
             .ConfigureLogging(logging =>
             {
                 logging.ClearProviders();
                 logging.SetMinimumLevel(LogLevel.Trace);
             })
                .UseNLog();  // NLog: Setup NLog for Dependency injection;
    }
}
