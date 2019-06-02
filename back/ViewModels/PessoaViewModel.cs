using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.ViewModels
{
    public class PessoaViewModel
    {
        public Entities.Pessoa Pessoa { get; set; }
        public List<Entities.TipoPerfil> TipoPerfil { get; set; }
        public Entities.Disciplina Disciplina { get; set; }
    }
}
