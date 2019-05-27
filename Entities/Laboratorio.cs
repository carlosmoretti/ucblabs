using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities
{
    [Table("Laboratorio")]
    public class Laboratorio : Implementation.EntityBase
    {
        [Column("Sala")]
        public string Sala { get; set; }
        [Column("Capacidade")]
        public int Capacidade { get; set; }
    }
}
