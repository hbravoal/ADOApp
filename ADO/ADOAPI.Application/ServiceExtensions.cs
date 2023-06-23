using System.Reflection;
using ADOAPI.Application.Behaviours;
using ADOAPI.Application.Feature.Queries;
using FluentValidation;
using MediatR;
using Microsoft.Extensions.DependencyInjection;

namespace ADOAPI.Application
{
    public static class ServiceExtensions
    {
        public static void AddApplicationLayer(this IServiceCollection services)
        {
            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
            services.AddMediatR(typeof(GetAllClientQuery).GetTypeInfo().Assembly);
            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationBehavior<,>));
           
        }
    }

}
