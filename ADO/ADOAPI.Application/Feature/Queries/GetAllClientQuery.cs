using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using ADOAPI.Domain.Entities.Customer;
using ADOAPI.Domain.Wrappers;
using ADOAPI.Persistence.Interface;
using AutoMapper;
using MediatR;

namespace ADOAPI.Application.Feature.Queries
{
    public class GetAllClientQuery : IRequest<PagedResponse<IEnumerable<Client>>>
    {
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
    }
    public class GetAllClientQueryHandler : IRequestHandler<GetAllClientQuery, PagedResponse<IEnumerable<Client>>>
    {
        private readonly IClientRepositoryAsync _clientRepositoryAsync;
        private readonly IMapper _mapper;
        public GetAllClientQueryHandler(IClientRepositoryAsync  clientRepositoryAsync, IMapper mapper)
        {
            _clientRepositoryAsync = clientRepositoryAsync;
            _mapper = mapper;
        }
        //Controlador :Lógica empresarial
        public async Task<PagedResponse<IEnumerable<Client>>> Handle(GetAllClientQuery request, CancellationToken cancellationToken)
        {
            //All the business logic.
            var validFilter = _mapper.Map<GetAllClientParameter>(request);
            var response = await _clientRepositoryAsync.GetPagedResponseAsync(validFilter.PageNumber, validFilter.PageSize);
            return new PagedResponse<IEnumerable<Client>>(null, validFilter.PageNumber, validFilter.PageSize);
        }
    }
   
}