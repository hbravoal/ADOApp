using System.ComponentModel.DataAnnotations.Schema;
using ADOAPI.Domain.Common;
using ADOAPI.Domain.Settings;

namespace ADOAPI.Domain.Entities.Customer
{
    [Table("Client", Schema = nameof(SchemasConfiguration.Customer))]
    public class Client : AuditableBaseEntity
    {
        public string Identification { get; set; }
        public int DocumentTypeId { get; set; }
        public virtual DocumentType DocumentType{ get; set; }
        public string Name { get; set; }
        public string LastName{ get; set; }
        public int GenderId { get; set; }
        public virtual Gender Gender{ get; set; }
    }
}
