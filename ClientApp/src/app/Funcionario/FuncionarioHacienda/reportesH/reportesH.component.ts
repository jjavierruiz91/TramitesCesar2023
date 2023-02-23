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
  selector: 'app-reportesH',
  templateUrl: './reportesH.component.html',
  styleUrls: ['./reportesH.component.css']
})
export class ReportesHaciendaComponent implements OnInit {

  solicitudeshacienda: Stramite[] = [];
  solicitudes_report: Stramite_report[] = [];
  total: number;
  finalizados: number;
  en_proceso: number;
  listaTramites: Tramite[] = [];
  total_certificados: number;

  
  certificados_paz: Certificado[] = [];
  certificadoscargados: Certificado[] = [];

  realizados11: number;


  finalizados11: number;
 

  en_proceso11: number;
 

  certificado11: number;
 

  total_motocicleta: number;
  total_automovil: number;
  finalizados_motocicleta: number;
  finalizados_automovil: number;
  en_proceso_motocicleta:number;
  en_proceso_automovil: number;
  certificados_automovil: number;
  certificados_motocicleta: number;



  constructor(private router: Router,
    private solicitudService: StramiteService,private serviciosTramite: TramiteService,private servicioDocumentos: DocumentoService) { }

  ngOnInit() {
    this.getSolicitudesTramites();
    this.getCertificados();
    this.estadisticatramites();
  }
  getTramite()
  {
    this.serviciosTramite.getTramiteHacienda('TramiteId').subscribe(tramite => this.listaTramites = tramite);

  }
  cancelar() {
    this.router.navigate(['SolicitudesH'])
      .then(() => {
      });
  }
 
    getCertificados()
    {
      this.solicitudService.getStramite().subscribe(soli =>
       {
         this.total_certificados = 0;
         this.certificados_automovil=0;
         this.certificados_motocicleta=0;

         this.certificado11 = 0;
        

         
         this.solicitudeshacienda = soli
         
         for (let index = 0; index < this.solicitudeshacienda.length; index++) 
         {
          const element = this.solicitudeshacienda[index];
          this.servicioDocumentos.getCertificados().subscribe(soli => 
           {
             this.certificados_paz = soli
             for (let index = 0; index < this.certificados_paz.length; index++)
             {
               const element1 = this.certificados_paz[index];
               if(element.codstramite == element1.codstramite && element1.fechacreacion != "")
               {
                 this.total_certificados++;
                 if(element.tipoTramite == "AUTOMOVIL")
                 {
                   this.certificados_automovil++;
                 }
                 if(element.tipoTramite == "MOTOCICLETA")
                 {
                   this.certificados_motocicleta++;
                 }
                 if(element.codtramite == 11)
                 {
                   this.certificado11++;
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
      this.solicitudeshacienda = solic
      this.en_proceso = 0;
      this.finalizados = 0;
      this.total = 0;
      this.total_automovil = 0;
      this.en_proceso_automovil = 0;
      this.finalizados_automovil = 0;
      this.total_motocicleta = 0;
      this.en_proceso_motocicleta = 0;
      this.finalizados_motocicleta =0;
      for(let index = 0; index < this.solicitudeshacienda.length; index++)
      {
        const element = this.solicitudeshacienda[index];
        if(element.sectorial == "Hacienda")
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
       
        if (element.tipoTramite == "AUTOMOVIL")
        {
          if (element.estado == "EN PROCESO")
          {
            this.en_proceso_automovil++;
          }
          if (element.estado == "FINALIZADO")
          {
            this.finalizados_automovil++;
          }
          this.total_automovil++;
        }
        if (element.tipoTramite == "MOTOCICLETA")
        {
          if (element.estado == "EN PROCESO")
          {
            this.en_proceso_motocicleta++;
          }
          if (element.estado == "FINALIZADO")
          {
            this.finalizados_motocicleta++;
          }
          this.total_motocicleta++;
        }

      }
      
      const resumen = this.solicitudeshacienda.reduce((p,c)=>
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
    let result = mergeById( this.solicitudeshacienda, this.listaTramites);
    console.log(result);
    })

  }

  async estadisticatramites()
  {
    this.solicitudService.getStramite().subscribe(solic =>{
      this.solicitudeshacienda = solic 
      this.realizados11= 0;
     
      this.finalizados11 = 0;
  
      this.en_proceso11 = 0;
     
      this.certificado11= 0;
  
  
      for(let index = 0; index < this.solicitudeshacienda.length; index++)
        {
          const element = this.solicitudeshacienda[index];
          if(element.codtramite == 11)
          {
            if (element.estado == "EN PROCESO")
            {
              this.en_proceso11++;
            }
            if (element.estado == "FINALIZADO")
            {
              this.finalizados11++;
            }
            this.realizados11++;
          }
         
         
     
        
  
        }
    
    });
    
  }

}
