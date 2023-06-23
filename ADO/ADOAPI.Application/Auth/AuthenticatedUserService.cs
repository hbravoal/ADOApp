using System.Security.Claims;
using ADOAPI.Domain.Interfaces.Auth;
using Microsoft.AspNetCore.Http;

namespace ADOAPI.Application.Auth
{
    public class AuthenticatedUserService : IAuthenticatedUserService
    {
        public AuthenticatedUserService(IHttpContextAccessor httpContextAccessor)
        {
            UserId = httpContextAccessor.HttpContext?.User?.FindFirstValue("uid");
        }
        public string UserId { get; }
    }
}