using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public class DALEquipamento : Implementation.DAL<Entities.Equipamento>, Interface.IDALEquipamento
    {
        public DALEquipamento(EFCore.Contexto ctx) : base(ctx) { }
    }
}
