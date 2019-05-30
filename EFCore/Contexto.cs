using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;
using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore.Proxies;

namespace EFCore
{
    public class Contexto : DbContext
    {
        public Contexto()
        { }

        public Contexto(DbContextOptions<Contexto> options) : base(options)
        {
        }

        public DbSet<Entities.Pessoa> Pessoa { get; set; }
        public DbSet<Entities.TipoPerfil> TipoPerfil { get; set; }
        public DbSet<Entities.Fornecedor> Fornecedor { get; set; }
        public DbSet<Entities.Laboratorio> Laboratorio { get; set; }
        public DbSet<Entities.Disciplina> Disciplina { get; set; }
        public DbSet<Entities.TipoEquipamento> TipoEquipamento { get; set; }
        public DbSet<Entities.Equipamento> Equipamento { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(@"Server=den1.mssql8.gear.host;Database=laboratoriosucb;User Id=laboratoriosucb;Password=Fg99M!!uVUt1;");
                optionsBuilder.UseLazyLoadingProxies();
            }
        }
    }
}
