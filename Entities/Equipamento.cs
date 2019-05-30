using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities
{
    [Table("Equipamento")]
    public class Equipamento : Implementation.EntityBase
    {
        [Column("NumeroSerie")]
        public string NumeroSerie { get; set; }
        [Column("NotaFiscal")]
        public string NotaFiscal { get; set; }
        [Column("Serial")]
        public string Serial { get; set; }
        [Column("IdTipoEquipamento")]
        public int IdTipoEquipamento { get; set; }
        [ForeignKey("IdTipoEquipamento")]
        public virtual TipoEquipamento TipoEquipamento { get; set; }
    }
}
