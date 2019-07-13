using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Controllers;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static API.Controllers.BaseController;

namespace back.Controllers
{
    [EnableCors("CORS")]
    [Route("api/agenda")]
    [ApiController]
    public class AgendaController : ControllerBase
    {
        UnitOfWork.Implementation.UoW _uow;
        public AgendaController()
        {
            _uow = new UnitOfWork.Implementation.UoW();
        }

        // GET: api/Agenda
        [HttpGet]
        public JsonResult Get()
        {
            return BaseController.GetResult<Entities.TipoPerfil>(_uow.TipoPerfil.GetAll().ToList());
        }

        // GET: api/Agenda/5
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            return BaseController.GetResult<Entities.TipoPerfil>(_uow.TipoPerfil.Get(id));
        }

        // POST: api/Agenda
        [HttpPost]
        public JsonResult Post(Entities.TipoPerfil tp)
        {
            if (_uow.TipoPerfil.GetAll().Any(d => d.Nome == tp.Nome))
                return BaseController.Retorno(TipoRetornoEnum.NOK, "Já existe um usuário com este nome.");

            _uow.TipoPerfil.Add(tp);
            _uow.Commit();

            return BaseController.Retorno(TipoRetornoEnum.OK, "Tipo de Perfil cadastrado com sucesso!");
        }

        // PUT: api/Agenda/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        [HttpDelete("{id}")]
        public JsonResult Deletar(int id)
        {
            _uow.TipoPerfil.Remove(_uow.TipoPerfil.Get(id));
            _uow.Commit();

            return BaseController.Retorno(TipoRetornoEnum.OK, "Tipo de Perfil removido com sucesso!");
        }

        [HttpGet("professores", Name = "GetProfessores")]
        public JsonResult Professores()
        {
            return BaseController.GetResult<object>(_uow.Pessoa.GetAllProfessores().ToList());
        }
    }
}
