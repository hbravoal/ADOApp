using System.Threading.Tasks;
using ADOAPI.Domain.DTOs.Account;
using ADOAPI.Domain.Wrappers;

namespace ADOAPI.Domain.Interfaces.Services
{
    public interface IAccountService
    {
        Task<Response<AuthenticationResponse>> AuthenticateAsync(AuthenticationRequest request, string ipAddress);
    }
}