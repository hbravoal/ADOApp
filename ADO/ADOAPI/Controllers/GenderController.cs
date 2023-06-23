using ADOAPI.Domain.Entities.Customer;
using ADOAPI.Domain.Interfaces.Repository;
using ADOAPI.Domain.Parameters;
using Microsoft.AspNetCore.Mvc;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ADOAPI.Controllers
{
    [Route("api/Clients/[controller]")]
    
    public class GenderController : ControllerBase
    {
        private readonly IGenderRepositoryAsync _repositoryAsync;

        public GenderController(IGenderRepositoryAsync repositoryAsync)
        {
            _repositoryAsync = repositoryAsync;
        }
        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAll([FromQuery] RequestParameter filter)
        {
           var response = await _repositoryAsync.GetPagedResponseAsync(filter.PageNumber, filter.PageSize);
           return Ok(response);
        }
        [HttpGet]
        public async Task<IActionResult> Get(int id)
        {
            if (id == default)
            {
                return NotFound();
            }
            var item = await _repositoryAsync.GetByIdAsync(id);
            return Ok(item);
        }

        /// <summary>
        /// <example>
        ///{
        ///    "active": true,
        ///    "description": "Male"
        /// }
        /// </example>
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Gender model)
        {
            return Ok(await _repositoryAsync.AddAsync(model));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Gender model)
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
            return Ok( _repositoryAsync.DeleteAsync(item));
        }
    }
}