using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Aplicativo.net.DTOs;
using Aplicativo.net.Models;
using Aplicativo.net.Repositories;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Aplicativo.net.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;
        private readonly AplicativoContext _context;
        public AuthController(IAuthRepository repo, IConfiguration config, IMapper mapper, AplicativoContext context)
        {
            _mapper = mapper;
            _config = config;
            _repo = repo;
            _context = context;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Documento>> GetDocumento(int id)
        {
            var clienteItem = await _context.Documentos.FindAsync(id);

            if (clienteItem == null)
            {
                return NotFound();
            }

            return clienteItem;
        }


        [HttpPost("register")]
        public async Task<IActionResult> RegisterArchivo(RegisterDto registerDto)
        {

          //  if (registerDto.Rol != "Usuario")
           // {
            //    registerDto.Estado = 1;
           // }
            //else
            //{
              //  registerDto.Estado = 0;

            // }

             registerDto.Estado = 1;
            //ToLower convierte los caracteres en minusculas
            registerDto.Correo = registerDto.Correo.ToLower();

            if (await _repo.UserExistsCorreo(registerDto.Correo))
                return BadRequest("El correo ya existe");
            if (await _repo.UserExistsCedula(registerDto.Id))
                return BadRequest("Ya existe un usuario con esa identificacion");
            registerDto.FechaRegistro = DateTime.Now.ToString();
            registerDto.Nombres = registerDto.Nombres.ToUpper();
            registerDto.Apellidos = registerDto.Apellidos.ToUpper();
            registerDto.TipoId = registerDto.TipoId.ToUpper();
            registerDto.Sexo = registerDto.Sexo.ToUpper();
            registerDto.Correo = registerDto.Correo.ToUpper();
            registerDto.Municipio = registerDto.Municipio.ToUpper();
            registerDto.Direccion = registerDto.Direccion.ToUpper();
            registerDto.GrupoEtnico = registerDto.GrupoEtnico.ToUpper();
            var userToCreate = _mapper.Map<Usuario>(registerDto);
            var createdUser = await _repo.Register(userToCreate, registerDto.Password);
            if (registerDto.Rol == "Usuario")
            {
              var ruta = "http://186.118.163.226:9060/login/ConfirmacionCuenta/";
               // var ruta = "https://loscalhost:5001/login/ConfirmacionCuenta/";
             

                var claims = new[]
                {
                    new Claim(ClaimTypes.Name, registerDto.Correo)
                };
                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(claims),
                    Expires = DateTime.Now.AddDays(1),
                    SigningCredentials = creds
                };

                var tokenHandler = new JwtSecurityTokenHandler();
                var token = tokenHandler.CreateToken(tokenDescriptor);
                string _token = tokenHandler.WriteToken(token);
                string _token1 = _token.Split(".")[1];
                System.Net.Mail.MailMessage mensaje = new System.Net.Mail.MailMessage();
                mensaje.To.Add(registerDto.Correo);
                mensaje.Subject = "Activación  de Cuenta";
                mensaje.SubjectEncoding = System.Text.Encoding.UTF8;
                mensaje.Body = "<h3>Hola " + "</h3> <br> <h4>Haz clic en el enlace de abajo para activar tu cuenta:</h4> <br> <br>" + ruta + _token1 + "/" + registerDto.Correo;
                mensaje.BodyEncoding = System.Text.Encoding.UTF8;
                mensaje.IsBodyHtml = true;
                mensaje.From = new System.Net.Mail.MailAddress(_config.GetSection("Credenciales:Correo").Value);
                System.Net.Mail.SmtpClient cliente = new System.Net.Mail.SmtpClient();
                cliente.Credentials = new System.Net.NetworkCredential(_config.GetSection("Credenciales:Correo").Value, _config.GetSection("Credenciales:Password").Value);
                cliente.Port = 25;
                cliente.EnableSsl = true;
                cliente.Host = "smtp.gmail.com";
                try
                {
                    cliente.Send(mensaje);
                    return StatusCode(201, new { mensaje = "Correo Enviado Exitosamente", Correo = createdUser.Correo, Nombres = createdUser.Nombres });
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message.ToString());
                    return Ok(new { error = e.Message.ToString() });
                }
            }
            return StatusCode(201, new { Correo = createdUser.Correo, Nombres = createdUser.Nombres });

        }


        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto loginDto)
        {
            var userFromRepo = await _repo.Login(loginDto.Correo.ToLower(), loginDto.Password);
            if (userFromRepo == null)
            {
                return Unauthorized();
            }
            bool estado = await _repo.UserEstate(loginDto.Correo);
            if (estado)
            {
                return Ok(new { mensaje = "Debe confirmar el correo electronico para activar su cuenta" });
            }

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, userFromRepo.Codusuario.ToString()),
                new Claim(ClaimTypes.Name, userFromRepo.Correo)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8
                .GetBytes(_config.GetSection("AppSettings:Token").Value));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new { token = tokenHandler.WriteToken(token), codigoU = userFromRepo.Codusuario, email = userFromRepo.Correo, nombres = userFromRepo.Nombres, apellidos = userFromRepo.Apellidos, rol = userFromRepo.Rol });
        }

        [HttpPost("PostEmail")]
        public ActionResult<Usuario> PostEmail([FromForm] ForgotPassword usuario)
        {
            if (usuario == null) throw new Exception("El objeto es nulo");
            // var clienteItem =  _context.Usuarios.Single(p => p.Correo == usuario.Email);
            Console.WriteLine("URL: " + usuario.ClientURI);
            Console.WriteLine("Email: " + usuario.Email);

            if (usuario == null)
            {
                return NotFound();
            }
            else
            {
                var claims = new[]
                {
                    new Claim(ClaimTypes.Name, usuario.Email)
                };
                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(claims),
                    Expires = DateTime.Now.AddDays(1),
                    SigningCredentials = creds
                };

                var tokenHandler = new JwtSecurityTokenHandler();
                var token = tokenHandler.CreateToken(tokenDescriptor);
                string _token = tokenHandler.WriteToken(token);
                string _token1 = _token.Split(".")[1];

                System.Net.Mail.MailMessage mensaje = new System.Net.Mail.MailMessage();
                mensaje.To.Add(usuario.Email);
                if (usuario.estado == "0")
                {
                    mensaje.Subject = "Activación  de Cuenta";
                    mensaje.SubjectEncoding = System.Text.Encoding.UTF8;
                    mensaje.Body = "<h3>Hola " + "</h3> <br> <h4>Haz clic en el enlace de abajo para activar tu cuenta:</h4> <br> <br>" + usuario.ClientURI + _token1 + "/" + usuario.Email;
                }
                else
                {
                    mensaje.Subject = "Recuperación de Cuenta";
                    mensaje.SubjectEncoding = System.Text.Encoding.UTF8;
                    // string url =usuario.ClientURI + "?token=" + tokenHandler.WriteToken(token) + "&email=" + usuario.Email;
                    mensaje.Body = "<h3>Hola " + "</h3> <br> <h4>Haz clic en el enlace de abajo para recuperar las credenciales de inicio de sesión de tu cuenta:</h4> <br> <br>" + usuario.ClientURI + _token1 + "/" + usuario.Email;
                }

                mensaje.BodyEncoding = System.Text.Encoding.UTF8;
                mensaje.IsBodyHtml = true;
                mensaje.From = new System.Net.Mail.MailAddress(_config.GetSection("Credenciales:Correo").Value);
                System.Net.Mail.SmtpClient cliente = new System.Net.Mail.SmtpClient();
                cliente.Credentials = new System.Net.NetworkCredential(_config.GetSection("Credenciales:Correo").Value, _config.GetSection("Credenciales:Password").Value);
                //MailAddress address = new MailAddress(usuario.Email);
                //string Host = address.Host; 
                //string dominio = Host.Split(".")[0];
                //Console.WriteLine("dominio: "+dominio);
                cliente.Port = 25;
                cliente.EnableSsl = true;
                cliente.Host = "smtp.gmail.com";
                try
                {
                    cliente.Send(mensaje);
                    return StatusCode(201, new { mensaje = "Correo Enviado Exitosamente" });
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message.ToString());
                }
            }
            return null;
        }

        [HttpPut("ResetPassword")]
        public async Task<IActionResult> ResetPassword([FromForm] UsuarioRequest usuario)
        {
            AuthRepository auth = new AuthRepository(_context);
            var user = _context.Usuarios.Single(p => p.Correo == usuario.Correo);
            if (await _repo.UserExists(usuario.Correo))
            {
                await auth.ResetPassword(usuario);
            }
            else
            {
                return BadRequest("El usuario no existe");
            }
            return Ok(user);
        }

        [HttpPut("ActivarUsuario")]
        public async Task<IActionResult> ActivarUsuario([FromForm] UsuarioRequest usuario)
        {
            var user = _context.Usuarios.Single(p => p.Correo == usuario.Correo);
            if (user == null)
            {
                return BadRequest("Este usuario no existe");
            }
            user.Estado = 1;
            _context.Entry(user).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok(user);
        }

    }
}