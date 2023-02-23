using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Aplicativo.net.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace Aplicativo.net.Repositories
{
    public class AuthRepository : IAuthRepository
    {
        private readonly AplicativoContext _context;

        public AuthRepository(AplicativoContext context)
        {
            _context = context;
        }

        public async Task<Usuario> Login(string correo, string password)
        {
            var user = await _context.Usuarios.FirstOrDefaultAsync(x => x.Correo == correo);
            if (user == null)
                return null;

            if (!VerifyPasswordHash(password, Convert.FromBase64String(user.Password), Convert.FromBase64String(user.Salt)))
                return null;

            return user; // auth successful
        }

    
        public async Task<Usuario> Register(Usuario user, string password)
        {
            byte[] passwordHash, salt;
            CreatePasswordHash(password, out passwordHash, out salt);
            user.Password = Convert.ToBase64String(passwordHash);
            user.Salt = Convert.ToBase64String(salt);

            await _context.Usuarios.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }
        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] salt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(salt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i]) return false;
                    // System.Console.WriteLine("1. "+computedHash[i]+"");
                    // System.Console.WriteLine("2. "+passwordHash[i]+"");
                }
            }
            return true;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] salt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                salt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public async Task<bool> UserExistsCorreo(string Username)
        {
            if (await _context.Usuarios.AnyAsync(x => x.Correo == Username))
                return true;
            return false;
        }

         public async Task<bool> UserExists(string Username)
        {
            if (await _context.Usuarios.AnyAsync(x => x.Correo == Username))
                return true;
            return false;
        }

        public async Task<UsuarioRequest> ResetPassword(UsuarioRequest user)
        {
            var usuario = _context.Usuarios.Single(p => p.Correo == user.Correo);
            if (usuario == null)
            {
                return null;
            }
            byte[] passwordHash, salt;
            CreatePasswordHash(user.Password, out passwordHash, out salt);
            usuario.Password =Convert.ToBase64String(passwordHash);
            usuario.Salt = Convert.ToBase64String(salt);
            _context.Entry(usuario).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return user;
        }

        public async Task<bool> UserExistsCedula(string cedula)
        {
            if (await _context.Usuarios.AnyAsync(x => x.Id == cedula))
                return true;
            return false;
        }

          public async Task<bool> UserEstate(string correo)
        {
            if (await _context.Usuarios.AnyAsync(x => x.Correo == correo && x.Estado == 1))
            {
                return false;
            }
            return true;
        }
    }
}