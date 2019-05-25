using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;

namespace EF
{
    public class Contexto : DbContext
    {
        public Contexto()
        {

        }

        public DbSet<Entities.Pessoa> Pessoa { get; set; }
        public DbSet<Entities.TipoPerfil> TipoPerfil { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=den1.mssql8.gear.host;Database=laboratoriosucb;User Id=laboratoriosucb;Password=Fg99M!!uVUt1;");
        }
    }
}
