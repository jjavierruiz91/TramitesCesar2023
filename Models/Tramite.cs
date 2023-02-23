using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Aplicativo.net.Models
{
    // [Table("TRAMITE")]

    public class Tramite
    {
        [Key] [JsonProperty("codtramite")] [DatabaseGenerated(DatabaseGeneratedOption.Identity)] public int Codtramite { get; set; }
        [JsonProperty("nombre")] public string Nombre { get; set; }
        [JsonProperty("descripcion")] public string Descripcion { get; set; }
        [JsonProperty("duracion")] public string Duracion { get; set; }
        [JsonProperty("costo")] public string Costo { get; set; }
        [JsonProperty("modalidad")] public string Modalidad { get; set; }
        [JsonProperty("url")] public string Url { get; set; }
        [JsonProperty("sectorial")] public string Sectorial { get; set; }

    }
}

