using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Entities.Implementation;
using System.ComponentModel.DataAnnotations;

namespace Entities
{
    [Table("Usuario")]
    public class Pessoa : EntityBase
    {
        [Column("Login")]
        [Required(ErrorMessage = "O campo Login é obrigatório!")]
        public string Login { get; set; }
        [Column("Senha")]
        [Required(ErrorMessage = "O campo Senha é obrigatório!")]
        public string Senha { get; set; }
        [Column("Nome")]
        [Required(ErrorMessage = "O campo Nome é obrigatório!")]
        public string Nome { get; set; }
        [Column("CPF")]
        [Required(ErrorMessage = "O campo CPF é obrigatório!")]
        public string CPF { get; set; }
        [Column("DataNascimento")]
        [DataType(DataType.DateTime, ErrorMessage = "A data está em um formato incorreto.")]
        public DateTime DataNascimento { get; set; }
        [Column("CEP")]
        [Required(ErrorMessage = "O campo CEP é obrigatório!")]
        public string CEP { get; set; }
        [Column("Matricula")]
        [Required(ErrorMessage = "O campo Matrícula é obrigatório!")]
        public string Matricula { get; set; }
        
        [NotMapped]
        public virtual ICollection<UsuarioTipoPerfil> TipoPerfil { get; set; }

        [NotMapped]
        public virtual ICollection<UsuarioDisciplina> Disciplina { get; set; }
        
    }
}
