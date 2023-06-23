using System.Threading.Tasks;
using ADOAPI.Application.DTOs.Account;
using ADOAPI.Application.Wrappers;

namespace ADOAPI.Domain.Interfaces.Services
{
    public interface IAccountService
    {
        Task<Response<AuthenticationResponse>> AuthenticateAsync(AuthenticationRequest request, string ipAddress);
    }
}