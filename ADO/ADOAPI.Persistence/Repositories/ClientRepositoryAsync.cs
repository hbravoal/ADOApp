using ADOAPI.Domain.Entities.Customer;
using ADOAPI.Persistence.Contexts;
using ADOAPI.Persistence.Interface;

namespace ADOAPI.Persistence.Repositories
{
    public class ClientRepositoryAsync : GenericRepositoryAsync<Client>, IClientRepositoryAsync
    {
        public ClientRepositoryAsync(ApplicationDbContext dbContext) : base(dbContext)
        {
        }
    }
}