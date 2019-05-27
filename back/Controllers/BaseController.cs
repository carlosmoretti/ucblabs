using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public static class BaseController
    {
        public enum TipoRetornoEnum
        {
            NOK,
            OK
        }

        public static JsonResult Retorno(TipoRetornoEnum retornoEnum, string mensagem)
        {
            return new JsonResult(new
            {
                status = retornoEnum.ToString(),
                mensagem = mensagem
            });
        }

        public static JsonResult GetResult<TEntity>(List<TEntity> lista)
        {
            return new JsonResult(new
            {
                total = lista.Count,
                data = lista
            });
        }

        public static JsonResult GetResult<TEntity>(TEntity item)
        {
            return new JsonResult(new
            {
                total = 1,
                data = item
            });
        }
    }
}