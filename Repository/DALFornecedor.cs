using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public class DALFornecedor : Implementation.DAL<Entities.Fornecedor>, Interface.IDALFornecedor
    {
        public DALFornecedor(EFCore.Contexto contexto) : base(contexto) { }
    }
}
