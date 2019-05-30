using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public class DALTipoEquipamento : Implementation.DAL<Entities.TipoEquipamento>, Interface.IDALTipoEquipamento
    {
        public DALTipoEquipamento(EFCore.Contexto ctx) : base(ctx) { }
    }
}
