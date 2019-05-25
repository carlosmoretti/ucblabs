using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Implementation
{
    public abstract class EntityBase
    {
        [Column("Id")]
        public int Id { get; set; }
    }
}
