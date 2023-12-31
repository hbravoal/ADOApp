﻿using System;

namespace ADOAPI.Domain.Common
{
    public abstract class AuditableBaseEntity
    {
        public virtual int Id { get; set; }
      
        public DateTime Created { get; set; }
        public DateTime? LastModified { get; set; }
        public bool Active{ get; set; }
    }
}
