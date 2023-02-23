using System.Threading.Tasks;
using Aplicativo.net.DTOs;
using Aplicativo.net.Models;
using Microsoft.AspNetCore.Http;

namespace Aplicativo.net.Repositories
{
    public interface IAuthRepository
    {
        Task<Usuario> Register(Usuario user, string password);
        Task<Usuario> Login(string username, string password);
        // Task<Usuario> CargaArchivo(int id, IFormFile file);

        Task<bool> UserExistsCorreo(string username);
        Task<bool> UserExistsCedula(string cedula);
        Task<bool> UserEstate(string correo);
        Task<bool> UserExists(string username);
    }
}