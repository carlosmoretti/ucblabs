using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Implementation
{
    public class DAL<TEntity> : Interface.IDAL<TEntity>
        where TEntity : class
    {
        private EFCore.Contexto _contexto;
        public DAL(EFCore.Contexto contexto)
        {
            _contexto = contexto;
        }

        public virtual void Add(TEntity entity)
        {
            _contexto.Set<TEntity>().Add(entity);
        }

        public virtual TEntity Get(int id)
        {
            return _contexto.Set<TEntity>().Find(id);
        }

        public virtual IEnumerable<TEntity> GetAll()
        {
            return _contexto.Set<TEntity>();
        }

        public virtual void Remove(TEntity entity)
        {
            _contexto.Remove(entity);
        }

        public virtual void Update(TEntity entity)
        {
            _contexto.Set<TEntity>().Attach(entity);
        }
    }
}
