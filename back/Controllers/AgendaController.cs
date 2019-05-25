﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace back.Controllers
{
    [Route("api/[controller]")]
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
        public void Post(Entities.TipoPerfil tp)
        {
            _uow.TipoPerfil.Add(tp);
            _uow.Commit();
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
