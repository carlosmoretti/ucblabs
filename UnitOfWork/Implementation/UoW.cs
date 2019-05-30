using System;
using System.Collections.Generic;
using System.Text;

namespace UnitOfWork.Implementation
{
    public class UoW : Interface.IUoW
    {
        private DAL.DALPessoa _dalPessoa;
        private DAL.DALTipoPerfil _dalTipoPerfil;
        private DAL.DALFornecedor _dalFornecedor;
        private DAL.DALLaboratorio _dalLaboratorio;
        private DAL.DALDisciplina _dalDisciplina;
        private DAL.DALEquipamento _dalEquipamento;
        private DAL.DALTipoEquipamento _dalTipoEquipamento;

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
        public DAL.DALFornecedor Fornecedor
        {
            get
            {
                if (_dalFornecedor == null)
                    _dalFornecedor = new DAL.DALFornecedor(_contexto);

                return _dalFornecedor;
            }
        }
        public DAL.DALLaboratorio Laboratorio
        {
            get
            {
                if (_dalLaboratorio == null)
                    _dalLaboratorio = new DAL.DALLaboratorio(_contexto);
                return _dalLaboratorio;
            }
        }
        public DAL.DALDisciplina Disciplina
        {
            get
            {
                if (_dalDisciplina == null)
                    _dalDisciplina = new DAL.DALDisciplina(_contexto);
                return _dalDisciplina;
            }
        }
        public DAL.DALTipoEquipamento TipoEquipamento
        {
            get
            {
                if (_dalTipoEquipamento == null)
                    _dalTipoEquipamento = new DAL.DALTipoEquipamento(_contexto);
                return _dalTipoEquipamento;
            }
        }
        public DAL.DALEquipamento Equipamento
        {
            get
            {
                if (_dalEquipamento == null)
                    _dalEquipamento = new DAL.DALEquipamento(_contexto);

                return _dalEquipamento;
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
