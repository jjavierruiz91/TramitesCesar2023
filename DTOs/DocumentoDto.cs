using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace Aplicativo.net.DTOs
{
    public class DocumentoDto
    {
        public int Id { get; set; }
        public IFormFile Archive { get; set; }
    }
    public class CertificadoDto
    {
        public int Id {get; set;}
        public IFormFile Archive {get;set;}
    }


    public class RegisterArchivoDtoResponse
    {
        public string Mensaje { get; set; }
    }
}