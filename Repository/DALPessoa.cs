using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class DALPessoa : Implementation.DAL<Entities.Pessoa>, Interface.IDALPessoa
    {
        public DALPessoa(EFCore.Contexto contexto) : base(contexto) { }

        public IEnumerable<object> GetAllProfessores()
        {
            return new EFCore.Contexto().Pessoa.AsNoTracking().Select(d => new
            {
                d.Nome,
                d.Matricula
            });
        }
    }
}
