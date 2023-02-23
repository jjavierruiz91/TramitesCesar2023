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
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  solicitudes: Stramite[] = [];
  solicitudes_report: Stramite_report[] = [];
  total: number;
  finalizados: number;
  en_proceso: number;
  listaTramites: Tramite[] = [];
  total_certificados: number;

  
  certificados: Certificado[] = [];
  certificadoscargados: Certificado[] = [];

  realizados1: number;
  realizados2: number;
  realizados3: number;
  realizados4: number;
  realizados5: number;

  finalizados1: number;
  finalizados2: number;
  finalizados3: number;
  finalizados4: number;
  finalizados5: number;

  en_proceso1: number;
  en_proceso2: number;
  en_proceso3: number;
  en_proceso4: number;
  en_proceso5: number;

  certificado1: number;
  certificado2: number;
  certificado3: number;
  certificado4: number;
  certificado5: number;

  total_ligas: number;
  total_clubes: number;
  finalizados_ligas: number;
  finalizados_clubes: number;
  en_proceso_ligas:number;
  en_proceso_clubes: number;
  certificados_clubes: number;
  certificados_ligas: number;



  constructor(
    private solicitudService: StramiteService,private serviciosTramite: TramiteService,private servicioDocumentos: DocumentoService) { }

  ngOnInit() {
    this.getSolicitudesTramites();
    this.getCertificados();
    this.estadisticatramites();
  }
  getTramite()
  {
    this.serviciosTramite.getTramite().subscribe(tramite => this.listaTramites = tramite);

  }

  
 
    getCertificados()
    {
      this.solicitudService.getStramite().subscribe(soli =>
       {
         this.total_certificados = 0;
         this.certificados_clubes=0;
         this.certificados_ligas=0;

         this.certificado1 = 0;
         this.certificado2 = 0;
         this.certificado3 = 0;
         this.certificado4 = 0;
         this.certificado5 = 0;

         
         this.solicitudes = soli
         
         for (let index = 0; index < this.solicitudes.length; index++) 
         {
          const element = this.solicitudes[index];
          this.servicioDocumentos.getCertificados().subscribe(soli => 
           {
             this.certificados = soli
             for (let index = 0; index < this.certificados.length; index++)
             {
               const element1 = this.certificados[index];
               if(element.codstramite == element1.codstramite && element1.fechacreacion != "")
               {
                 this.total_certificados++;
                 if(element.tipoTramite == "CLUB")
                 {
                   this.certificados_clubes++;
                 }
                 if(element.tipoTramite == "LIGAS")
                 {
                   this.certificados_ligas++;
                 }
                 if(element.codtramite == 1)
                 {
                   this.certificado1++;
                 }
                 
                 if(element.codtramite == 2)
                 {
                   this.certificado2++;
                 }
                 
                 if(element.codtramite == 3)
                 {
                   this.certificado3++;
                 }
                 
                 if(element.codtramite == 4)
                 {
                   this.certificado4++;
                 }
                 
                 if(element.codtramite == 5)
                 {
                   this.certificado5++;
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
        if(element.sectorial == "Recreación y Deporte")
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
       
        if (element.tipoTramite == "CLUB")
        {
          if (element.estado == "EN PROCESO")
          {
            this.en_proceso_clubes++;
          }
          if (element.estado == "FINALIZADO")
          {
            this.finalizados_clubes++;
          }
          this.total_clubes++;
        }
        if (element.tipoTramite == "LIGAS")
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

  async estadisticatramites()
  {
    this.solicitudService.getStramite().subscribe(solic =>{
      this.solicitudes = solic 
      this.realizados1= 0;
      this.realizados2= 0;
      this.realizados3= 0;
      this.realizados4= 0;
      this.realizados5= 0;
  
      this.finalizados1 = 0;
      this.finalizados2 = 0;
      this.finalizados3 = 0;
      this.finalizados4 = 0;
      this.finalizados5 = 0;
  
      this.en_proceso1 = 0;
      this.en_proceso2 = 0;
      this.en_proceso3 = 0;
      this.en_proceso4 = 0;
      this.en_proceso5 = 0;
  
  
      for(let index = 0; index < this.solicitudes.length; index++)
        {
          const element = this.solicitudes[index];
          if(element.codtramite == 1)
          {
            if (element.estado == "EN PROCESO")
            {
              this.en_proceso1++;
            }
            if (element.estado == "FINALIZADO")
            {
              this.finalizados1++;
            }
            this.realizados1++;
          }
          if(element.codtramite == 2)
          {
            if (element.estado == "EN PROCESO")
            {
              this.en_proceso2++;
            }
            if (element.estado == "FINALIZADO")
            {
              this.finalizados2++;
            }
            this.realizados2++;
          }
          if(element.codtramite == 3)
          {
            if (element.estado == "EN PROCESO")
            {
              this.en_proceso3++;
            }
            if (element.estado == "FINALIZADO")
            {
              this.finalizados3++;
            }
            this.realizados3++;
          }
          if(element.codtramite == 4)
          {
            if (element.estado == "EN PROCESO")
            {
              this.en_proceso4++;
            }
            if (element.estado == "FINALIZADO")
            {
              this.finalizados4++;
            }
            this.realizados4++;
          }
          if(element.codtramite == 5)
          {
            if (element.estado == "EN PROCESO")
            {
              this.en_proceso5++;
            }
            if (element.estado == "FINALIZADO")
            {
              this.finalizados5++;
            }
            this.realizados5++;
          }
        
  
        }
    
    });
    
  }

}
