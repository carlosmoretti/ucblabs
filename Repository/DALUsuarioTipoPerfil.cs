using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public class DALUsuarioTipoPerfil : Implementation.DAL<Entities.UsuarioTipoPerfil>
    {
        public DALUsuarioTipoPerfil(EFCore.Contexto ctx) : base(ctx)
        {

        }
    }
}
