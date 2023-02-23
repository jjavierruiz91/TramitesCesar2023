using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Aplicativo.net.Models;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using Aplicativo.net.DTOs;
using Microsoft.AspNetCore.Http;
using System;

namespace Aplicativo.net.Controllers
{

    [Route("api/[Controller]")]
    [ApiController]
    public class CertificadoController : ControllerBase
    {

        private readonly AplicativoContext _context;
        private readonly IWebHostEnvironment _appEnvironment;

        public CertificadoController(AplicativoContext context, IWebHostEnvironment appEnvironment)
        {
            _context = context;
            _appEnvironment = appEnvironment;

            // if (_context.Libros.Count() == 0)
            // {
            //     _context.Libros.Add(new Stramite { Id = 1, Titulo ="Mike ",PrecioVenta =3000,Popular =true});
            //     _context.Libros.Add(new Stramite { Id = 2, Titulo ="Carlos ",PrecioVenta =5000,Popular =true});
            //     _context.Libros.Add(new Stramite { Id = 3, Titulo ="Miguel",PrecioVenta =6000,Popular =true});
            //     _context.SaveChanges();
            // }
        }

        // POST: api/Task
       [HttpGet("{id}")]
        public async Task<ActionResult<Certificado>> GetCertificado(int id)
        {
            var certificado = await _context.Certificados.FindAsync(id);

            if (certificado == null)
            {
                return NotFound();
            }

            return certificado;

        }
         [HttpPost]
        public async Task<ActionResult<Certificado>> PostCertificado(Certificado newcertificado)
        {
            var certificado = await _context.Certificados.FindAsync(newcertificado.Codcertificado);
            if (certificado != null)
            {
                return BadRequest();
            }
            else 
            {
                _context.Certificados.Add(newcertificado);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetCertificado), new { id = newcertificado.Codcertificado }, certificado);
            }

        }

        [HttpPut("UpdateCertificado")]
        public async Task<IActionResult> UpdateCertificado([FromForm] CertificadoDto CertificadoRequest)
        {
            var path = _appEnvironment.ContentRootPath;
            int id = CertificadoRequest.Id;
            var re = Request.Form.Files;

            var certificado = _context.Certificados.Single(p => p.Codcertificado == id);
            try 
            {
                FileInfo fi = new FileInfo(CertificadoRequest.Archive.FileName);
                string nameFile = certificado.Nombrecer + DateTime.Now.Ticks.ToString() + fi.Extension;
                //var ruta = "ClientApp\\dist\\assets\\Certificados\\" + nameFile;
               
              var ruta = "ClientApp\\src\\assets\\Certificados\\" + nameFile;
                var filePath = Path.Combine(path, ruta);
                 if (System.IO.File.Exists(certificado.Url))
                {}
                else
                {
                    using (var stream = System.IO.File.Create(filePath))
                    {
                        CertificadoRequest.Archive.CopyTo(stream);
                    }
                    certificado.Fechacreacion = DateTime.Now.ToString();
                    certificado.Url = nameFile;
                    _context.Entry(certificado).State = EntityState.Modified;
                    await _context.SaveChangesAsync();
                   
                }
            }catch (System.Exception)
            {
                Console.WriteLine("catch");
                return BadRequest();
            }
             return Ok(certificado);
           

        }

        



        [HttpGet]
        public async Task<ActionResult<IEnumerable<Certificado>>> GetCertificados()
        {
            return await _context.Certificados.ToListAsync();
        }

         [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCertificado(int id)
        {
            var certificado = await _context.Certificados.FindAsync(id);

            if (certificado == null)
            {
                return NotFound();
            }

            _context.Certificados.Remove(certificado);
            await _context.SaveChangesAsync();

            return NoContent();
        }


       

        
        

    }
}
