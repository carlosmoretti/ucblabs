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
    public class EquipamentoController : ControllerBase
    {
        UnitOfWork.Implementation.UoW _uow;

        public EquipamentoController()
        {
            _uow = new UnitOfWork.Implementation.UoW();
        }

        // GET: api/Equipamento
        [HttpGet]
        public JsonResult Get()
        {
            return BaseController.GetResult<Entities.Equipamento>(_uow.Equipamento.GetAll().ToList());
        }

        // POST: api/Equipamento
        [HttpPost]
        public JsonResult Post(Entities.Equipamento equipamento)
        {
            if (string.IsNullOrEmpty(equipamento.NotaFiscal)
                || string.IsNullOrEmpty(equipamento.NumeroSerie)
                || string.IsNullOrEmpty(equipamento.Serial))
                return BaseController.Retorno(BaseController.TipoRetornoEnum.NOK, "Todos os campos devem ser preenchidos!");

            var total = _uow.Equipamento.GetAll().ToList();
            if (total.Any(d => d.NumeroSerie == equipamento.NumeroSerie))
                return BaseController.Retorno(BaseController.TipoRetornoEnum.NOK, "Este Número de Série já está associado a outro equipamento");

            if(total.Any(d=>d.NotaFiscal == equipamento.NotaFiscal))
                return BaseController.Retorno(BaseController.TipoRetornoEnum.NOK, "Esta Nota Fiscal já está associado a outro equipamento");

            _uow.Equipamento.Add(equipamento);
            _uow.Commit();
            return BaseController.Retorno(BaseController.TipoRetornoEnum.OK, "Equipamento cadastrado com sucesso.");
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            _uow.Equipamento.Remove(_uow.Equipamento.Get(id));
            _uow.Commit();
            return BaseController.Retorno(BaseController.TipoRetornoEnum.OK, "Equipamento removido com sucesso.");
        }
    }
}
