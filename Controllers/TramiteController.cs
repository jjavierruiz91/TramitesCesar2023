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
    public class TramiteController : ControllerBase
    {
        private readonly AplicativoContext _context;

        public TramiteController(AplicativoContext context)
        {
            _context = context;

            if (_context.Tramites.Count() == 0)
            {     
                //TRAMITES DE LA SECRETARIA DE RECREACION Y DEPORTES                
                _context.Tramites.Add(new Tramite {  Nombre ="Personería Jurídica de organismos deportivos y recreativos",Descripcion ="Reconocimiento de la personería jurídica de los organismos deportivos y recreativos vinculados al sistema nacional del deporte",Duracion ="15",Costo="Trámite sin costo",Modalidad="Trámite en línea",Url="Reconocimiento", Sectorial = "Recreación y Deporte"});
                _context.Tramites.Add(new Tramite {  Nombre ="Inscripción de dignatarios de los organismos deportivos y recreativos",Descripcion ="Inscripción de dignatarios de los organismos deportivos y recreativos vinculados al sistema nacional del deporte",Duracion ="15",Costo="Trámite sin costo",Modalidad="Trámite en línea",Url="Inscripcion", Sectorial = "Recreación y Deporte"});
                _context.Tramites.Add(new Tramite {  Nombre ="Aprobación de reformas estatutarias",Descripcion ="Aprobación de las reformas estatutarias de los organismos deportivos o recreativos vinculados al sistema nacional del deporte",Duracion ="15",Costo="Trámite sin costo",Modalidad="Trámite en línea",Url="Aprobacion", Sectorial = "Recreación y Deporte"});
                _context.Tramites.Add(new Tramite {  Nombre ="Cancelación de Personería Jurídica",Descripcion ="Cancelación de la personería jurídica de ligas y clubes deportivos",Duracion ="15",Costo="Trámite sin costo",Modalidad="Trámite en línea",Url="Cancelacion", Sectorial = "Recreación y Deporte"});
                _context.Tramites.Add(new Tramite {  Nombre ="Certificación de existencia y representación legal",Descripcion ="Certificación de existencia y representación legal de las ligas y asociaciones deportivas",Duracion ="15",Costo="Trámite sin costo",Modalidad="Trámite en línea",Url="Certificado", Sectorial = "Recreación y Deporte"});
                //TRAMITES DE LA SECRETARIA DE GOBIERNO
                _context.Tramites.Add(new Tramite {  Nombre ="Certificación de la Personería jurídica y representación legal de las organizaciones comunales de inscrito primero y segundo grado",Descripcion ="Certificación de la personería jurídica de las organizaciones comunales de primero y segundo grado",Duracion ="15",Costo="Trámite sin costo",Modalidad="Trámite en línea",Url="Certificación", Sectorial = "Gobierno"});
                _context.Tramites.Add(new Tramite {  Nombre ="Reconocimiento de la Personería jurídica de los organismos de acción comunal de primero y segundo grado ",Descripcion ="Reconocimiento de la personeria juridica a los organismos comunales de primer y segundo grado",Duracion ="15",Costo="Trámite sin costo",Modalidad="Trámite en línea",Url="Reconocimiento2", Sectorial = "Gobierno"});
                _context.Tramites.Add(new Tramite {  Nombre ="Cancelación de la Personería jurídica de las organizaciones comunales de primero y segundo grado ",Descripcion ="Cancelación de la personeria juridica a las organizaciones comunales de primer y segundo grado",Duracion ="15",Costo="Trámite sin costo",Modalidad="Trámite en línea",Url="CPersoneria", Sectorial = "Gobierno"});
                _context.Tramites.Add(new Tramite {  Nombre ="Inscripción o reforma de estatutos de las organizaciones comunales de primero y segundo grado  ",Descripcion ="Inscripción o reforma de estatutos de las organizaciones comunales de primer y segundo grado",Duracion ="15",Costo="Trámite sin costo",Modalidad="Trámite en línea",Url="Inscripción", Sectorial = "Gobierno"});
                _context.Tramites.Add(new Tramite {  Nombre ="Inscripción de dignatarios de las organizaciones comunales de primero y segundo grado",Descripcion ="Inscripción de dignatarios de las organizaciones comunales de primero y segundo grado",Duracion ="15",Costo="Trámite sin costo",Modalidad="Trámite en línea",Url="Dignatarios", Sectorial = "Gobierno"});
                //TRAMITES DE LA SECRETARIA DE HACIENDA
                _context.Tramites.Add(new Tramite {  Nombre ="Certificado de Paz y Salvo",Descripcion ="Obtener la certificación donde se manifiesta que el deudor se encuentra a paz y salvo con la entidad",Duracion ="15",Costo="Trámite sin costo",Modalidad="Trámite en línea",Url="Paz y Salvo", Sectorial = "Hacienda"});

                _context.SaveChanges();
                
            
            }
        }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Tramite>> PostTramite(Tramite newdocumento)
        {
            var varLibro = await _context.Tramites.FindAsync(newdocumento.Codtramite);
            if (varLibro != null)
            {
                return BadRequest();
            }
            else
            {
                _context.Tramites.Add(newdocumento);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetTramite), new { id = newdocumento.Codtramite }, newdocumento);
            }

        }
        // PUT: api/cliente/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTramite(int id, Tramite itemTramite)
        {
            if (id != (itemTramite.Codtramite))
            {
                return BadRequest();
            }
            _context.Entry(itemTramite).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tramite>>> GetTramites()
        {
            return await _context.Tramites.ToListAsync();
        }

        // GET: api/Task/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Tramite>> GetTramite(int id)
        {
            var clienteItem = await _context.Tramites.FindAsync(id);

            if (clienteItem == null)
            {
                return NotFound();
            }

            return clienteItem;
        }

        [HttpGet("GetTramiteGobierno")]
        public  List<Tramite> GetTramiteGobierno([FromQuery] string tramiteId)
        {
            
        var clienteItem = _context.Tramites.Where(tramite => tramite.Sectorial == tramiteId);
 
            return clienteItem.ToList();
        }

       [HttpGet("GetTramiteDeporte")]
        public  List<Tramite> GetTramiteDeporte([FromQuery] string tramiteId)
        {
            
        var clienteItem = _context.Tramites.Where(tramite => tramite.Sectorial == tramiteId);
 
            return clienteItem.ToList();
        }
        
        [HttpGet("GetTramiteHacienda")]
        public  List<Tramite> GetTramiteHacienda([FromQuery] string tramiteId)
        {
            
        var clienteItem = _context.Tramites.Where(tramite => tramite.Sectorial == tramiteId);
 
            return clienteItem.ToList();
        }

        [HttpGet("GetSectoriales")]
        public  List<string> GetSectorial()
        {
        var clienteItem = _context.Tramites.Select(sectorial => sectorial.Sectorial);
 
            return clienteItem.ToList();
        }

        // DELETE: api/Todo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTramite(int id)
        {
            var TramiteItem = await _context.Tramites.FindAsync(id);

            if (TramiteItem == null)
            {
                return NotFound();
            }

            _context.Tramites.Remove(TramiteItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
