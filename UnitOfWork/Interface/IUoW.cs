using System;
using System.Collections.Generic;
using System.Text;

namespace UnitOfWork.Interface
{
    public interface IUoW : IDisposable
    {
        void Commit();
    }
}
