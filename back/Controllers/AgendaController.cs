using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Controllers;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace back.Controllers
{
    [EnableCors("CORS")]
    [Route("api/[controller]")]
    [ApiController]
    public class AgendaController : BaseController
    {
        UnitOfWork.Implementation.UoW _uow;
        public AgendaController()
        {
            _uow = new UnitOfWork.Implementation.UoW();
        }

        // GET: api/Agenda
        [HttpGet]
        public IEnumerable<Entities.TipoPerfil> Get()
        {
            return _uow.TipoPerfil.GetAll();
        }

        // GET: api/Agenda/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Agenda
        [HttpPost]
        public JsonResult Post(Entities.TipoPerfil tp)
        {
            if (_uow.TipoPerfil.GetAll().Any(d => d.Nome == tp.Nome))
                return Retorno(TipoRetornoEnum.NOK, "Já existe um usuário com este nome.");

            _uow.TipoPerfil.Add(tp);

            return Retorno(TipoRetornoEnum.OK, "Tipo de Perfil cadastrado com sucesso!");
        }

        // PUT: api/Agenda/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
