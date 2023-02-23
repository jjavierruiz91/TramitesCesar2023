using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Aplicativo.net.Models
{
    // [Table("DOCUMENTO")]

    public class Documento
    {
        [Key] [JsonProperty("codocumento")] [DatabaseGenerated(DatabaseGeneratedOption.Identity)] public int Codocumento { get; set; }
        [JsonProperty("codstramite")] public int Codstramite { get; set; }
        [JsonProperty("observacion")] public string Observacion { get; set; }
        [JsonProperty("fechacreacion")] public string Fechacreacion { get; set; }
        [JsonProperty("fechaactualizacion")] public string Fechaactualizacion { get; set; }
        [JsonProperty("nombredoc")] public string Nombredoc { get; set; }
        [JsonProperty("url")] public string Url { get; set; }
        [JsonProperty("tamanio")] public double Tamanio { get; set; }
        [JsonProperty("estado")] public string Estado { get; set; }
        [JsonProperty("plantilla")] public string Plantilla { get; set; }
        // public FormFile Archive { get; set; }

        // public IFormFile File { get; set; }
    }
}

