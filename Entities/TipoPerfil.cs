using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities
{
    [Table("TipoPerfil")]
    public class TipoPerfil : Implementation.EntityBase
    {
        [Column("Nome")]
        [Required(ErrorMessage = "O Nome é obrigatório!")]
        public string Nome { get; set; }

        [NotMapped]
        public virtual ICollection<UsuarioTipoPerfil> Usuario { get; set; }
    }
}
