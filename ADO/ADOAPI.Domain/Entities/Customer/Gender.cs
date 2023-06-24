using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using ADOAPI.Domain.Common;
using ADOAPI.Domain.Settings;
using Newtonsoft.Json;

namespace ADOAPI.Domain.Entities.Customer
{
    [Table("Gender", Schema = nameof(SchemasConfiguration.Gender))]
    public class Gender : AuditableBaseEntity
    {
        public string Description { get; set; }
    }
}

