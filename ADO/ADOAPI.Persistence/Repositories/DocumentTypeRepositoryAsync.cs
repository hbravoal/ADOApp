using ADOAPI.Domain.Entities.Customer;
using ADOAPI.Domain.Interfaces.Repository;
using ADOAPI.Persistence.Contexts;

namespace ADOAPI.Persistence.Repositories
{
    public class DocumentTypeRepositoryAsync : GenericRepositoryAsync<DocumentType>, IDocumentTypeRepositoryAsync
    {
        public DocumentTypeRepositoryAsync(ApplicationDbContext dbContext) : base(dbContext)
        {
        }
    }
}