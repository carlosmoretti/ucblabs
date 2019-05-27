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
    [Route("api/fornecedor")]
    [ApiController]
    public class FornecedorController : ControllerBase
    {
        private UnitOfWork.Implementation.UoW _uow;
        public FornecedorController()
        {
            _uow = new UnitOfWork.Implementation.UoW();
        }

        // GET: api/Fornecedor
        [HttpGet]
        public JsonResult Get()
        {
            return BaseController.GetResult<Entities.Fornecedor>(_uow.Fornecedor.GetAll().ToList());
        }

        // GET: api/Fornecedor/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Fornecedor
        [HttpPost]
        public JsonResult Post(Entities.Fornecedor fornecedor)
        {
            if (_uow.Fornecedor.GetAll().Any(d => d.Nome == fornecedor.Nome))
                return BaseController.Retorno(BaseController.TipoRetornoEnum.NOK, "Já existe um fornecedor cadastrado com este nome.");

            _uow.Fornecedor.Add(fornecedor);
            _uow.Commit();

            return BaseController.Retorno(BaseController.TipoRetornoEnum.OK, "Fornecedor cadastrado com sucesso!");
        }

        // PUT: api/Fornecedor/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            _uow.Fornecedor.Remove(_uow.Fornecedor.Get(id));
            _uow.Commit();

            return BaseController.Retorno(BaseController.TipoRetornoEnum.OK, "Fornecedor removido com sucesso!");
        }
    }
}
