using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Interface
{
    public interface IDAL<TEntity> 
        where TEntity : class
    {
        IEnumerable<TEntity> GetAll();
        TEntity Get(int id);
        void Add(TEntity entity);
        void Remove(TEntity entity);
        void Update(TEntity entity);
    }
}
