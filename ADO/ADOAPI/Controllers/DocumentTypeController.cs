using ADOAPI.Domain.Entities.Customer;
using ADOAPI.Domain.Interfaces.Repository;
using ADOAPI.Domain.Parameters;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
namespace ADOAPI.Controllers
{
    [Route("api/Clients/[controller]")]
    
    public class DocumentTypeController : ControllerBase
    {
        private readonly IDocumentTypeRepositoryAsync _repositoryAsync;

        public DocumentTypeController(IDocumentTypeRepositoryAsync repositoryAsync)
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
        [Authorize]
        public async Task<IActionResult> Get(int id)
        {
            if (id == default)
            {
                return NotFound();
            }
            var item = await _repositoryAsync.GetByIdAsync(id);
            return Ok(item);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] DocumentType model)
        {
            return Ok(await _repositoryAsync.AddAsync(model));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] DocumentType model)
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
            if (id == default)
            {
                return NotFound();
            }
            return Ok( _repositoryAsync.DeleteAsync(item));
        }
    }
}