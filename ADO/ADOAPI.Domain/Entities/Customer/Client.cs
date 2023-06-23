using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using ADOAPI.Domain.Common;
using ADOAPI.Domain.Settings;

namespace MarketplaceBenefits.WebApi.Domain.Entities
{
    [Table("Client", Schema = nameof(SchemasConfiguration.Customer))]
    public class Client : AuditableBaseEntity
    {
        public string Email { get; set; }
        public string Name { get; set; }
        public string LastName{ get; set; }

     
    }
}
