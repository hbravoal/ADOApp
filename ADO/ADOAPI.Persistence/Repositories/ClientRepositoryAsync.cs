using ADOAPI.Domain.Entities.Customer;
using ADOAPI.Domain.Interfaces.Repository;
using ADOAPI.Persistence.Contexts;

namespace ADOAPI.Persistence.Repositories
{
    public class ClientRepositoryAsync : GenericRepositoryAsync<Client>, IClientRepositoryAsync
    {
        public ClientRepositoryAsync(ApplicationDbContext dbContext) : base(dbContext)
        {
        }
    }
}