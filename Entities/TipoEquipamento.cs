using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities
{
    [Table("TipoEquipamento")]
    public class TipoEquipamento : Implementation.EntityBase
    {
        [Column("Nome")]
        public string Nome { get; set; }
    }
}
