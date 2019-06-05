using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public class DALUsuarioDisciplina : Implementation.DAL<Entities.UsuarioDisciplina>
    {
        public DALUsuarioDisciplina(EFCore.Contexto _ctx) : base(_ctx) { }
    }
}
