import { Component, OnInit } from '@angular/core';
import { Stramite } from 'src/app/models/stramite';
import { StramiteService } from 'src/app/services/stramite.service';
import { TramiteService } from 'src/app/services/tramite.service';
import { element } from 'protractor';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { Tramite } from '../../../models/tramite';
import { Stramite_report } from '../../../models/stramite';
import { DocumentoService } from 'src/app/services/documento.service';
import { Certificado } from 'src/app/models/documento';
import { triggerAsyncId } from 'async_hooks';

@Component({
  selector: 'app-reportest',
  templateUrl: './reportest.component.html',
  styleUrls: ['./reportest.component.css']
})
export class ReportesTComponent implements OnInit {

  solicitudes: Stramite[] = [];
  solicitudes_report: Stramite_report[] = [];
  total: number;
  finalizados: number;
  en_proceso: number;
  listaTramites: Tramite[] = [];
  total_certificadosGobierno: number;

  
  certificados: Certificado[] = [];
  certificadosPrueba: Certificado[] = [];
  certificadoscargados: Certificado[] = [];

  realizados6: number;
  realizados7: number;
  realizados8: number;
  realizados9: number;
  realizados10: number;

  finalizados6: number;
  finalizados7: number;
  finalizados8: number;
  finalizados9: number;
  finalizados10: number;

  en_proceso6: number;
  en_proceso7: number;
  en_proceso8: number;
  en_proceso9: number;
  en_proceso10: number;

  certificado6: number;
  certificado7: number;
  certificado8: number;
  certificado9: number;
  certificado10: number;

  total_ligas: number;
  total_clubes: number;
  finalizados_ligas: number;
  finalizados_clubes: number;
  en_proceso_ligas:number;
  en_proceso_clubes: number;
  certificados_clubes: number;
  certificados_p_s: number;



  constructor(private router: Router,
    private solicitudService: StramiteService,private serviciosTramite: TramiteService,private servicioDocumentos: DocumentoService) { }

  ngOnInit() {
    this.getSolicitudesTramites();
    this.getCertificadosGobierno();
    this.estadisticatramitesGobiernoT();
  }
  getTramite()
  {
    this.serviciosTramite.getTramiteGobierno('TramiteId').subscribe(tramite => this.listaTramites = tramite);

  }
  cancelar() {
    this.router.navigate(['Solicitudest'])
      .then(() => {
        window.location.reload();
      });
  }

  
 
    getCertificadosGobierno()
    {
      this.solicitudService.getStramite().subscribe(soli =>
       {
         this.total_certificadosGobierno = 0;
         this.certificados_clubes=0;
         this.certificados_p_s=0;

         this.certificado6 = 0;
         this.certificado7 = 0;
         this.certificado8 = 0;
         this.certificado9 = 0;
         this.certificado10 = 0;

         
         this.solicitudes = soli
         
         for (let index = 0; index < this.solicitudes.length; index++) 
         {
          const element = this.solicitudes[index];
          this.servicioDocumentos.getCertificados().subscribe(soli => 
           {
             this.certificadosPrueba = soli
             for (let index = 0; index < this.certificadosPrueba.length; index++)
             {
               const element1 = this.certificadosPrueba[index];
               if(element.codstramite == element1.codstramite && element1.fechacreacion != "")
               {
                 this.total_certificadosGobierno++;
                 if(element.tipoTramite == "PRIMER GRADOO Y SEGUNDO GRADO")
                 {
                   
                 }
                 if(element.tipoTramite == "PRIMER GRADO Y SEGUNDO GRADO")
                 {
                   this.certificados_p_s++;
                 }
                 if(element.codtramite == 6)
                 {
                   this.certificado6++;
                 }
                 
                 if(element.codtramite == 7)
                 {
                   this.certificado7++;
                 }
                 
                 if(element.codtramite == 8)
                 {
                   this.certificado8++;
                 }
                 
                 if(element.codtramite == 9)
                 {
                   this.certificado9++;
                 }
                 
                 if(element.codtramite == 10)
                 {
                   this.certificado10++;
                 }
               }
             }
           } );
         }

       });  
      }

  getSolicitudesTramites()
  {
    this.solicitudService.getStramite().subscribe(solic =>{
      this.solicitudes = solic
      this.en_proceso = 0;
      this.finalizados = 0;
      this.total = 0;
      this.total_clubes = 0;
      this.en_proceso_clubes = 0;
      this.finalizados_clubes = 0;
      this.total_ligas = 0;
      this.en_proceso_ligas = 0;
      this.finalizados_ligas =0;
      for(let index = 0; index < this.solicitudes.length; index++)
      {
        const element = this.solicitudes[index];
        if(element.sectorial == "Gobierno")
        {
          if (element.estado == "EN PROCESO")
          {
            this.en_proceso++;
          }
          if (element.estado == "FINALIZADO")
          {
            this.finalizados++
          }
          this.total++;

        }
       
        if (element.tipoTramite == "PRIMER GRADO Y SEGUNDO GRADO")
        {
          if (element.estado == "EN PROCESO")
          {
            
          }
          if (element.estado == "FINALIZADO")
          {
            
          }
          
        }
        if (element.tipoTramite == "PRIMER GRADO Y SEGUNDO GRADO")
        {
          if (element.estado == "EN PROCESO")
          {
            this.en_proceso_ligas++;
          }
          if (element.estado == "FINALIZADO")
          {
            this.finalizados_ligas++;
          }
          this.total_ligas++;
        }

      }
      
      const resumen = this.solicitudes.reduce((p,c)=>
      { // <-- primero agrupamos 
        p[c.codtramite] = (p[c.codtramite]  || 0)+1;
        return p;
      },{})
      const resultado = Object.keys(resumen).map(e=>{ // <-- después transformamos el formato
        const o = {};
        o[0] = e;
        o[1] = resumen[e];
        return o;
    });

    for(let index = 0; index < resultado.length; index++)
    {
      const element = resultado[index];
    }

    console.log(resultado);
    //console.log(resultado[0]);
    //console.log(resultado[1]);
    const mergeById = (array1, array2) =>
    array1.map(itm => ({
      ...array2.find((item) => (item.codtramite === itm.codtramite) && item),
      ...itm
    }));
    let result = mergeById( this.solicitudes, this.listaTramites);
    console.log(result);
    })

  }

  async estadisticatramitesGobiernoT()
  {
    this.solicitudService.getStramite().subscribe(solic =>{
      this.solicitudes = solic 
      this.realizados6= 0;
      this.realizados7= 0;
      this.realizados8= 0;
      this.realizados9= 0;
      this.realizados10= 0;
  
      this.finalizados6 = 0;
      this.finalizados7 = 0;
      this.finalizados8 = 0;
      this.finalizados9 = 0;
      this.finalizados10 = 0;
  
      this.en_proceso6 = 0;
      this.en_proceso7 = 0;
      this.en_proceso8 = 0;
      this.en_proceso9 = 0;
      this.en_proceso10 = 0;
  
  
      for(let index = 0; index < this.solicitudes.length; index++)
        {
          const element = this.solicitudes[index];
          if(element.codtramite == 6)
          {
            if (element.estado == "EN PROCESO")
            {
              this.en_proceso6++;
            }
            if (element.estado == "FINALIZADO")
            {
              this.finalizados6++;
            }
            this.realizados6++;
          }
          if(element.codtramite == 7)
          {
            if (element.estado == "EN PROCESO")
            {
              this.en_proceso7++;
            }
            if (element.estado == "FINALIZADO")
            {
              this.finalizados7++;
            }
            this.realizados7++;
          }
          if(element.codtramite == 8)
          {
            if (element.estado == "EN PROCESO")
            {
              this.en_proceso8++;
            }
            if (element.estado == "FINALIZADO")
            {
              this.finalizados8++;
            }
            this.realizados8++;
          }
          if(element.codtramite == 9)
          {
            if (element.estado == "EN PROCESO")
            {
              this.en_proceso9++;
            }
            if (element.estado == "FINALIZADO")
            {
              this.finalizados9++;
            }
            this.realizados9++;
          }
          if(element.codtramite == 10)
          {
            if (element.estado == "EN PROCESO")
            {
              this.en_proceso10++;
            }
            if (element.estado == "FINALIZADO")
            {
              this.finalizados10++;
            }
            this.realizados10++;
          }
        
  
        }
    
    });
    
  }

}
