using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BaseController : ControllerBase
    {
        public enum TipoRetornoEnum
        {
            NOK,
            OK
        }

        public JsonResult Retorno(TipoRetornoEnum retornoEnum, string mensagem)
        {
            return new JsonResult(new
            {
                status = retornoEnum.ToString(),
                mensagem = mensagem
            });
        }

        public JsonResult GetResult<TEntity>(List<TEntity> lista)
        {
            return new JsonResult(new
            {
                total = lista.Count,
                data = lista
            });
        }
    }
}