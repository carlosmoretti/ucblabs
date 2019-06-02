using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities
{
    [Table("UsuarioTipoPerfil")]
    public class UsuarioTipoPerfil
    {
        [Column("UsuarioId")]
        public int UsuarioId { get; set; }
        [Column("TipoPerfilId")]
        public int TipoPerfilId { get; set; }
        [ForeignKey("UsuarioId")]
        public virtual Pessoa Pessoa { get; set; }
        [ForeignKey("TipoPerfilId")]
        public virtual TipoPerfil TipoPerfil { get; set; }
    }
}
