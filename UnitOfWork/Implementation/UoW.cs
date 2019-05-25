using System;
using System.Collections.Generic;
using System.Text;

namespace UnitOfWork.Implementation
{
    public class UoW : Interface.IUoW
    {
        private DAL.DALPessoa _dalPessoa;
        private DAL.DALTipoPerfil _dalTipoPerfil;

        EFCore.Contexto _contexto;
        public UoW()
        {
            _contexto = new EFCore.Contexto();
        }

        public DAL.DALTipoPerfil TipoPerfil
        {
            get
            {
                if (_dalTipoPerfil == null)
                    _dalTipoPerfil = new DAL.DALTipoPerfil(_contexto);
                return _dalTipoPerfil;
            }
        }

        public DAL.DALPessoa Pessoa
        {
            get
            {
                if (_dalPessoa == null)
                    _dalPessoa = new DAL.DALPessoa(_contexto);
                return _dalPessoa;
            }
        }

        public void Commit()
        {
            _contexto.SaveChanges();
        }

        public void Dispose()
        {
            _contexto.Dispose();
        }
    }
}
