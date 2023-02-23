using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Aplicativo.net.Models
{
    // [Table("CERTIFICADOS")]

    public class Certificado
    {
        [Key] [JsonProperty("codcertificado")] [DatabaseGenerated(DatabaseGeneratedOption.Identity)] public int Codcertificado { get; set; }
        [JsonProperty("codstramite")] public int Codstramite { get; set; }
        [JsonProperty("fechacreacion")] public string Fechacreacion { get; set; }
        [JsonProperty("nombrecer")] public string Nombrecer { get; set; }
        [JsonProperty("url")] public string Url { get; set; }
        
    }
}
