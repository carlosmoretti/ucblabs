using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Entities.Implementation
{
    public abstract class EntityBase
    {
        [Column("Id")]
        [Key]
        public int Id { get; set; }
    }
}
