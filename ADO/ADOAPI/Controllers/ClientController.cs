using ADOAPI.Domain.Entities.Customer;
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
        [HttpGet("GetAll")]
        public IActionResult GetAll([FromQuery] RequestParameter filter)
        {
           var response =  _repositoryAsync.GetPagedResponseAsync(filter.PageNumber, filter.PageSize,
                   item=>item.Active,x => x.DocumentType, /*<= Single property */ 
                   x => x.Gender
               
               );
           return Ok(response);
        }
        [HttpGet]
        public  IActionResult Get(int id)
        {
            if (id != default)
            {
                return NotFound();
            }
            var item =  _repositoryAsync.GetById(d=>d.Id==id,
                item=>item.Active,x => x.DocumentType /*<= Single property */ 

                );
            return Ok(item);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Client model)
        {
            
            var response = await _repositoryAsync.AddAsync(model);
            if (response?.Id is not null)
            {
                var item =  _repositoryAsync.GetById(d=>d.Id==response.Id,
                    item=>item.Gender,x => x.DocumentType /*<= Single property */ 

                );
                return Ok(item);  
            }

            return Ok();

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Client model)
        {
            if (id != model.Id)
            {
                return BadRequest();
            }

            await _repositoryAsync.UpdateAsync(model);
            return Ok(model);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var item = await _repositoryAsync.GetByIdAsync(id);
            if (item.Id == default)
            {
                return NotFound();
            }

            await _repositoryAsync.DeleteAsync(item);
            return Ok( );
        }
    }
}