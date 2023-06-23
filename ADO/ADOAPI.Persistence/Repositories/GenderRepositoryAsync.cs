using ADOAPI.Domain.Entities.Customer;
using ADOAPI.Domain.Interfaces.Repository;
using ADOAPI.Persistence.Contexts;

namespace ADOAPI.Persistence.Repositories
{
    public class GenderRepositoryAsync : GenericRepositoryAsync<Gender>, IGenderRepositoryAsync
    {
        public GenderRepositoryAsync(ApplicationDbContext dbContext) : base(dbContext)
        {
        }
    }
}