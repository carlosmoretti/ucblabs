using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public class DALPessoa : Implementation.DAL<Entities.Pessoa>, Interface.IDALPessoa
    {
        public DALPessoa(EFCore.Contexto contexto) : base(contexto) { }
    }
}
