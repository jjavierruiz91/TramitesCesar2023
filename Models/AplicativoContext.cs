using Microsoft.EntityFrameworkCore;

namespace Aplicativo.net.Models
{
    public class AplicativoContext : DbContext
    {
        public AplicativoContext(DbContextOptions<AplicativoContext> options) :
        base(options)
        {
        }
        public DbSet<Documento> Documentos { get; set; }
        public DbSet<Stramite> Stramites { get; set; }
        public DbSet<Tramite> Tramites { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Certificado> Certificados {get; set;}
    }
}