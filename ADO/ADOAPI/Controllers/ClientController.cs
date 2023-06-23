using ADOAPI.Domain.Interfaces.Repository;
using ADOAPI.Domain.Parameters;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ADOAPI.Controllers
{
    [Route("api/Clients/[controller]")]
    
    public class ClientController : ControllerBase
    {
        private readonly IClientRepositoryAsync _repositoryAsync;

        public ClientController(IClientRepositoryAsync repositoryAsync)
        {
            _repositoryAsync = repositoryAsync;
        }
        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] RequestParameter filter)
        {
           var response = await _repositoryAsync.GetPagedResponseAsync(filter.PageNumber, filter.PageSize);
           return Ok(response);
        }
    }
}