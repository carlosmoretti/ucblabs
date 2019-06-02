using System.ComponentModel.DataAnnotations.Schema;

namespace Entities
{
    [Table("UsuarioDisciplina")]
    public class UsuarioDisciplina
    {
        [Column("UsuarioId")]
        public int UsuarioId { get; set; }
        [Column("DisciplinaId")]
        public int DisciplinaId { get; set; }
        [ForeignKey("UsuarioId")]
        public virtual Entities.Pessoa Usuario { get; set; }
        [ForeignKey("DisciplinaId")]
        public virtual Entities.Disciplina Disciplina { get; set; }
    }
}