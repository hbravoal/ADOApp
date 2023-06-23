using ADOAPI.Application.Feature.Queries;
using ADOAPI.Domain.Entities.Customer;
using AutoMapper;

namespace ADOAPI.Application.Mappings
{
    public class GeneralProfile : Profile
    {
        public GeneralProfile()
        {

           
            #region Clients
            CreateMap<Client, ClientViewModel>().ReverseMap();
            CreateMap<GetAllClientQuery, GetAllClientParameter>().ReverseMap();;
            #endregion

        }
    }
}
