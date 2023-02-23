// using System;
// using System.Linq;
// using System.Threading.Tasks;
// using Aplicativo.net.Models;
// using Microsoft.AspNetCore.Authorization;
// using Microsoft.AspNetCore.Identity;
// using Microsoft.AspNetCore.Mvc;

// namespace Aplicativo.net.Controllers
// {
//     [Route("api/[controller]")]
//     [ApiController]
//     public class UserProfile: ControllerBase
//     {
//             private UserManager<Usuario> _userManager;
//         public UserProfileController(UserManager<Usuario> userManager)
//         {
//             _userManager = userManager;
//         }

//         [HttpGet]
//         [Authorize]
//         //GET : /api/UserProfile
//         public async Task<Object> GetUserProfile() {
//             string userId = User.Claims.First(c => c.Type == "UserID").Value;
//             var user = await _userManager.FindByIdAsync(userId);
//             return new
//             {
//                  user.Nombres,
//                  user.Correo,
//                  user.Apellidos
//             };
//         }
//     }
// }