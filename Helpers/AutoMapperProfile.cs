using Aplicativo.net.DTOs;
using Aplicativo.net.Models;
using AutoMapper;

namespace Aplicativo.net.Helpers
{
    public class AutoMapperProfile: Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<LoginDto, Usuario>();
            CreateMap<RegisterDto, Usuario>();
            CreateMap<DocumentoDto, Documento>();
        }
    }
}