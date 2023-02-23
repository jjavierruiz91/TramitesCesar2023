using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Aplicativo.net.DTOs;
using Aplicativo.net.Models;
using Microsoft.EntityFrameworkCore;

namespace Aplicativo.net.Repositories
{
    public class DocumentoRepository : IDocumentoRepository
    {

        private readonly AplicativoContext _context;

        public DocumentoRepository(AplicativoContext context)
        {
            _context = context;
        }

        public async Task<Documento> CrearArchivo(DocumentoDto documentoDto)
        {
            var documento = _context.Documentos.Single(p => p.Codocumento == documentoDto.Id);

            FileInfo fi = new FileInfo(documentoDto.Archive.FileName);
            var filePath = "D:\\User\\Escritorio\\Practicas\\Sotfware\\Aplicativo.net\\ClientApp\\src\\assets\\Documentos\\" + DateTime.Now.Ticks.ToString() + fi.Extension;
            using (var stream = System.IO.File.Create(filePath))
            {
                documentoDto.Archive.CopyTo(stream);
            }
            double tamanio = documentoDto.Archive.Length;
            tamanio = tamanio / 1000000;
            tamanio = Math.Round(tamanio, 2);
            documento.Fechacreacion = DateTime.Now.ToString();
            documento.Tamanio = tamanio;
            documento.Url = filePath;
            Console.WriteLine("Nombre Documento: " + documento.Nombredoc);
            Console.WriteLine("Nombre Fechacreacion: " + documento.Fechacreacion);
            Console.WriteLine("Nombre Url: " + documento.Url);

            _context.Entry(documento).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return documento;
        }

        public async Task<bool> ArchivoExists(string url)
        {
            if (await _context.Documentos.AnyAsync(x => x.Url == url))
                return true;
            return false;
        }
    }
}