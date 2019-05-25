using DAL.Implementation;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public class DALTipoPerfil : DAL<Entities.TipoPerfil>, Interface.IDALTipoPerfil
    {
        public DALTipoPerfil(EFCore.Contexto contexto) : base(contexto) { }
    }
}
