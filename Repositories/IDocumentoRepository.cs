using Aplicativo.net.DTOs;
using Aplicativo.net.Models;
using System.Threading.Tasks;


namespace Aplicativo.net.Repositories
{
    public interface IDocumentoRepository
    {
        Task<Documento> CrearArchivo(DocumentoDto documento);
        Task<bool> ArchivoExists(string url);

    }
}

