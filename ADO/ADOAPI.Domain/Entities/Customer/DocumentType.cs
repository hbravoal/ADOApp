using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using ADOAPI.Domain.Common;
using ADOAPI.Domain.Settings;
using Newtonsoft.Json;

namespace ADOAPI.Domain.Entities.Customer
{
    [Table("DocumentType", Schema = nameof(SchemasConfiguration.DocumentType))]
    public class DocumentType : AuditableBaseEntity
    {
        public string Description { get; set; }
        
    }
}

