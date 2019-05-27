using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [EnableCors("CORS")]
    [Route("api/[controller]")]
    [ApiController]
    public class LaboratorioController : ControllerBase
    {
        // GET: api/Laboratorio
        UnitOfWork.Implementation.UoW _uow;
        public LaboratorioController()
        {
            _uow = new UnitOfWork.Implementation.UoW();
        }

        [HttpGet]
        public JsonResult Get()
        {
            return BaseController.GetResult<Entities.Laboratorio>(_uow.Laboratorio.GetAll().ToList());
        }

        // POST: api/Laboratorio
        [HttpPost]
        public JsonResult Post(Entities.Laboratorio laboratorio)
        {
            if (_uow.Laboratorio.GetAll().Any(d => d.Sala == laboratorio.Sala))
                return BaseController.Retorno(BaseController.TipoRetornoEnum.NOK, "Este laboratório já existe.");

            if(String.IsNullOrEmpty(laboratorio.Sala) || laboratorio.Capacidade == 0)
                return BaseController.Retorno(BaseController.TipoRetornoEnum.NOK, "Todos os campos são obrigatórios.");

            _uow.Laboratorio.Add(laboratorio);
            _uow.Commit();

            return BaseController.Retorno(BaseController.TipoRetornoEnum.OK, "Laboratório cadastrado com sucesso!");
        }
        

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            _uow.Laboratorio.Remove(_uow.Laboratorio.Get(id));
            _uow.Commit();

            return BaseController.Retorno(BaseController.TipoRetornoEnum.OK, "Laboratório removido com sucesso!");
        }
    }
}
