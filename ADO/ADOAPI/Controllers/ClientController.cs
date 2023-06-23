using ADOAPI.Application.Feature.Queries;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ADOAPI.Controllers
{
    [Route("api/Clients/[controller]")]
    
    public class ClientController : BaseApiController
    {
        // GET: api/<controller>
        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] GetAllClientParameter filter)
        {

            return Ok(await Mediator.Send(new GetAllClientQuery() { PageSize = filter.PageSize, PageNumber = filter.PageNumber }));
        }
    }
}