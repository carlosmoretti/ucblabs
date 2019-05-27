using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public class DALLaboratorio : Implementation.DAL<Entities.Laboratorio>, Interface.IDALLaboratorio
    {
        public DALLaboratorio(EFCore.Contexto _ctx) : base(_ctx) { }
    }
}
