using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using back;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [EnableCors("CORS")]
    [Route("api/[controller]")]
    [ApiController]
    public class PessoaController : ControllerBase
    {
        UnitOfWork.Implementation.UoW _uow;

        public PessoaController()
        {
            _uow = new UnitOfWork.Implementation.UoW();
        }

        // GET: api/Pessoa
        [HttpGet]
        public JsonResult Get()
        {
            return BaseController.GetResult<Entities.Pessoa>(_uow.Pessoa.GetAll().ToList());
        }

        // POST: api/Pessoa
        [HttpPost]
        public JsonResult Post(ViewModels.PessoaViewModel pessoa)
        {
            var todasPessoas = _uow.Pessoa.GetAll();

            if (todasPessoas.Any(d => d.Matricula == pessoa.Pessoa.Matricula))
                return BaseController.Retorno(BaseController.TipoRetornoEnum.NOK, "Já existe uma pessoa com esta matricula.");

            if(todasPessoas.Any(d=>d.Login == pessoa.Pessoa.Login))
                return BaseController.Retorno(BaseController.TipoRetornoEnum.NOK, "Já existe uma pessoa com este login!");

            if(todasPessoas.Any(d=>d.CPF == pessoa.Pessoa.CPF))
                return BaseController.Retorno(BaseController.TipoRetornoEnum.NOK, "Já existe uma pessoa com este CPF!");

            if(pessoa.TipoPerfil.Count == 0)
                return BaseController.Retorno(BaseController.TipoRetornoEnum.NOK, "É necessário escolher ao menos um perfil para este usuário!");

            _uow.Pessoa.Add(pessoa.Pessoa);
            _uow.Commit();

            foreach(var item in pessoa.TipoPerfil)
            {
                _uow.UsuarioTipoPerfil.Add(new Entities.UsuarioTipoPerfil()
                {
                    UsuarioId = pessoa.Pessoa.Id,
                    TipoPerfilId = item.Id
                });
            }
            _uow.Commit();

            return BaseController.Retorno(BaseController.TipoRetornoEnum.OK, "Pessoa cadastrada com sucesso!");
        }

        // PUT: api/Pessoa/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            var pessoa = _uow.Pessoa.Get(id);

            _uow.UsuarioTipoPerfil.Remove(_uow.UsuarioTipoPerfil.GetAll().Where(d => d.UsuarioId == id).FirstOrDefault());
            _uow.Pessoa.Remove(pessoa);

            _uow.Commit();

            return BaseController.Retorno(BaseController.TipoRetornoEnum.OK, string.Format("{0} foi removido(a) com sucesso!", pessoa.Nome));
        }
    }
}
