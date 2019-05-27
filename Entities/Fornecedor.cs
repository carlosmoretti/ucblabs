using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities
{
    [Table("Fornecedor")]
    public class Fornecedor : Entities.Implementation.EntityBase
    {
        [Column("Nome")]
        public string Nome { get; set; }
    }
}
