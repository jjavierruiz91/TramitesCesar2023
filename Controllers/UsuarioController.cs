using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Aplicativo.net.Models;
using System;

namespace Aplicativo.net.Controllers
{

    [Route("api/[Controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly AplicativoContext _context;

        public UsuarioController(AplicativoContext context)
        {
            _context = context;

            // if (_context.Libros.Count() == 0)
            // {
            //     _context.Libros.Add(new Usuario { Id = 1, Titulo ="Mike ",PrecioVenta =3000,Popular =true});
            //     _context.Libros.Add(new Usuario { Id = 2, Titulo ="Carlos ",PrecioVenta =5000,Popular =true});
            //     _context.Libros.Add(new Usuario { Id = 3, Titulo ="Miguel",PrecioVenta =6000,Popular =true});
            //     _context.SaveChanges();
            // }
        }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Usuario>> PostUsuario(Usuario newdocumento)
        {
            var varLibro = await _context.Usuarios.FindAsync(newdocumento.Codusuario);
            if (varLibro != null)
            {
                return BadRequest();
            }
            else
            {
                _context.Usuarios.Add(newdocumento);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetUsuario), new { id = newdocumento.Codusuario }, newdocumento);
            }

        }
        // PUT: api/cliente/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsuario(int id, Usuario itemUsuario)
        {
            if (id != (itemUsuario.Codusuario))
            {
                return BadRequest();
            }
            itemUsuario.Nombres = itemUsuario.Nombres.ToUpper();
            itemUsuario.Apellidos = itemUsuario.Apellidos.ToUpper();
            itemUsuario.TipoId = itemUsuario.TipoId.ToUpper();
            itemUsuario.Sexo = itemUsuario.Sexo.ToUpper();
            itemUsuario.Correo = itemUsuario.Correo.ToUpper();
            itemUsuario.Municipio = itemUsuario.Municipio.ToUpper();
            itemUsuario.Direccion = itemUsuario.Direccion.ToUpper();
            itemUsuario.GrupoEtnico = itemUsuario.GrupoEtnico.ToUpper();
            _context.Entry(itemUsuario).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Usuario>>> GetUsuarios()
        {
            return await _context.Usuarios.ToListAsync();
        }

        // GET: api/Task/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Usuario>> GetUsuario(int id)
        {
            var clienteItem = await _context.Usuarios.FindAsync(id);

            if (clienteItem == null)
            {
                return NotFound();
            }

            return clienteItem;
        }

        // DELETE: api/Todo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUsuario(int id)
        {
            var UsuarioItem = await _context.Usuarios.FindAsync(id);

            if (UsuarioItem == null)
            {
                return NotFound();
            }

            _context.Usuarios.Remove(UsuarioItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}
