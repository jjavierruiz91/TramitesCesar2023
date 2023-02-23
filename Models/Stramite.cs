using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Aplicativo.net.Models
{
    // [Table("STRAMITE")]

    public class Stramite
    {
        [Key] [JsonProperty("codstramite")] [DatabaseGenerated(DatabaseGeneratedOption.Identity)] public int Codstramite { get; set; }
        [JsonProperty("codusuario")] public int Codusuario { get; set; }
        [JsonProperty("codtramite")] public int Codtramite { get; set; }
        [JsonProperty("codFuncionario")] public int CodFuncionario { get; set; }
        [JsonProperty("estado")] public string Estado { get; set; }
        [JsonProperty("fecha")] public string Fecha { get; set; }
        [JsonProperty("tipoTramite")] public string TipoTramite { get; set; }
        [JsonProperty("sectorial")] public string Sectorial { get; set; }
    }

     /*public class MapperStramiteUsuario 
    {
        public int Codusuario { get; set; }
        public int Codtramite { get; set; }
        public int CodFuncionario { get; set; }
        public string Estado { get; set; }
        public string Fecha { get; set; }
        public string TipoTramite { get; set; }
        public string Sectorial { get; set; }
        public string Id { get; set; }
        public string TipoId { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public string Correo { get; set; }
        public string Celular { get; set; }
        public string Sexo { get; set; }
        public string Municipio { get; set; }
        public string Direccion { get; set; }
        public string GrupoEtnico { get; set; }
        public string FechaNacimiento { get; set; }
        public string FechaRegistro { get; set; }
        public string Rol { get; set; }
        public string Password { get; set; }
      
        public string Salt { get; set; }



    }*/
}
