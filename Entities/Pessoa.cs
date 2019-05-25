using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Entities.Implementation;

namespace Entities
{
    [Table("Pessoa")]
    public class Pessoa : EntityBase
    {
        [Column("Login")]
        public string Login { get; set; }
        [Column("Senha")]
        public string Senha { get; set; }
        [Column("Nome")]
        public string Nome { get; set; }
        [Column("Sobrenome")]
        public string Sobrenome { get; set; }
        [ForeignKey("TipoPerfil")]
        public int TipoPerfilId { get; set; }
        public virtual TipoPerfil TipoPerfil { get; set; }
    }
}
