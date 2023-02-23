using System.ComponentModel.DataAnnotations;

namespace Aplicativo.net.DTOs
{
    public class LoginDto
    {
        [Required]
        public string Correo { get; set; }
        [Required]
        public string Password { get; set; }
    }
    public class ForgotPassword
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string ClientURI { get; set; }

        public string estado { get; set; }
    }
}