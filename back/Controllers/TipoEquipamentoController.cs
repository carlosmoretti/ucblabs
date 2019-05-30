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
    public class TipoEquipamentoController : ControllerBase
    {
        UnitOfWork.Implementation.UoW _uow;

        public TipoEquipamentoController()
        {
            _uow = new UnitOfWork.Implementation.UoW();
        }

        // GET: api/TipoEquipamento
        [HttpGet]
        public JsonResult Get()
        {
            return BaseController.GetResult<Entities.TipoEquipamento>(_uow.TipoEquipamento.GetAll().ToList());
        }

        // POST: api/TipoEquipamento
        [HttpPost]
        public JsonResult Post(Entities.TipoEquipamento tipo)
        {
            _uow.TipoEquipamento.Add(tipo);
            _uow.Commit();

            return BaseController.Retorno(BaseController.TipoRetornoEnum.OK, "Tipo de Equipamento cadastrado com sucesso!");
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            _uow.TipoEquipamento.Remove(_uow.TipoEquipamento.Get(id));
            return BaseController.Retorno(BaseController.TipoRetornoEnum.OK, "Tipo de Equipamento removido com sucesso.");
        }
    }
}
