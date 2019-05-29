using DAL.Interface;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public class DALDisciplina : Implementation.DAL<Entities.Disciplina>, IDALDisciplina
    {
        public DALDisciplina(EFCore.Contexto contexto) : base(contexto) { }
    }
}
