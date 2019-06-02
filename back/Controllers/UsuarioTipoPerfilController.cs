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
    public class UsuarioTipoPerfilController : ControllerBase
    {
        UnitOfWork.Implementation.UoW _uow;

        public UsuarioTipoPerfilController()
        {
            _uow = new UnitOfWork.Implementation.UoW();
        }

        [HttpPost]
        public void Post(string matricula, Entities.TipoPerfil[] perfis)
        {
            var usuario = _uow.Pessoa.GetAll().Where(d => d.Matricula == matricula).Select(d=>d.Id).FirstOrDefault();
            var tipoperfil = perfis.Select(d=>d.Id);

            foreach(var item in tipoperfil)
            {
                _uow.UsuarioTipoPerfil.Add(new Entities.UsuarioTipoPerfil()
                {
                    UsuarioId = usuario,
                    TipoPerfilId = item
                });

                _uow.Commit();
            }

        }
    }
}
