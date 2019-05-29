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
    public class DisciplinaController : ControllerBase
    {
        UnitOfWork.Implementation.UoW _uow;

        public DisciplinaController()
        {
            _uow = new UnitOfWork.Implementation.UoW();
        }

        // GET: api/Disciplina
        [HttpGet]
        public JsonResult Get()
        {
            return BaseController.GetResult<Entities.Disciplina>(_uow.Disciplina.GetAll().ToList());
        }

        // GET: api/Disciplina/5
        [HttpGet("{id}", Name = "Get")]
        public JsonResult Get(int id)
        {
            return BaseController.GetResult<Entities.Disciplina>(_uow.Disciplina.GetAll().ToList());
        }

        // POST: api/Disciplina
        [HttpPost]
        public JsonResult Post(Entities.Disciplina disciplina)
        {
            if (String.IsNullOrEmpty(disciplina.Nome))
                return BaseController.Retorno(BaseController.TipoRetornoEnum.NOK, "Esta disciplina precisa ter um nome.");

            _uow.Disciplina.Add(disciplina);
            _uow.Commit();

            return BaseController.Retorno(BaseController.TipoRetornoEnum.OK, "Disciplina cadastrada com sucesso!");
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            _uow.Disciplina.Remove(_uow.Disciplina.Get(id));
            _uow.Commit();

            return BaseController.Retorno(BaseController.TipoRetornoEnum.OK, "Disciplina removida com sucesso.");
        }
    }
}
