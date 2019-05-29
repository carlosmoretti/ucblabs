using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities
{
    [Table("Disciplina")]
    public class Disciplina : Implementation.EntityBase
    {
        [Column("Nome")]
        [Required(ErrorMessage = "O campo Nome é obrigatório")]
        public string Nome { get; set; }
    }
}
