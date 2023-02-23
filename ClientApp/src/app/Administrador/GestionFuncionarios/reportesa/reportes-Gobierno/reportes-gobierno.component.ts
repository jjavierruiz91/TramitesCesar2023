import { Component, OnInit } from '@angular/core';
import { Tramite } from '../../../../models/tramite';
import { Stramite_report } from '../../../../models/stramite';
import { DocumentoService } from 'src/app/services/documento.service';
import { Certificado } from 'src/app/models/documento';
import { Stramite } from 'src/app/models/stramite';
import { StramiteService } from 'src/app/services/stramite.service';
import { TramiteService } from 'src/app/services/tramite.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reportes-gobierno',
  templateUrl: './reportes-gobierno.component.html',
  styleUrls: ['./reportes-gobierno.component.css']
})
export class ADMINGobiernoReportesComponent implements OnInit {

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
  realizados6: number;
  realizados7: number;
  realizados8: number;
  realizados9: number;
  realizados10: number;
  realizados11: number;

  finalizados1: number;
  finalizados2: number;
  finalizados3: number;
  finalizados4: number;
  finalizados5: number;
  finalizados6: number;
  finalizados7: number;
  finalizados8: number;
  finalizados9: number;
  finalizados10: number;
  finalizados11: number;

  en_proceso1: number;
  en_proceso2: number;
  en_proceso3: number;
  en_proceso4: number;
  en_proceso5: number;
  en_proceso6: number;
  en_proceso7: number;
  en_proceso8: number;
  en_proceso9: number;
  en_proceso10: number;
  en_proceso11: number;

  certificado1: number;
  certificado2: number;
  certificado3: number;
  certificado4: number;
  certificado5: number;
  certificado6: number;
  certificado7: number;
  certificado8: number;
  certificado9: number;
  certificado10: number;
  certificado11: number;

  en_proceso_sectorial1: number;
  finalizados_sectorial1: number;
  certificado_sectorial1:number;
  total_sectorial1: number;

  en_proceso_sectorial2: number;
  finalizados_sectorial2: number;
  certificado_sectorial2:number;
  total_sectorial2: number;

  en_proceso_sectorial_3: number;
  finalizados_sectorial_3: number;
  certificado_sectorial_3:number;
  total_sectorial_3: number;

  constructor(
    private solicitudService: StramiteService,private serviciosTramite: TramiteService,private servicioDocumentos: DocumentoService, private location: Location) { }

  ngOnInit() {
    this.getSolicitudesTramites();
    this.getSolicitudesTramitesGobierno();
    this.getSolicitudesHacienda();
    this.getAllCertificados();
    this.estadisticatramites();
    this.estadisticatramitesGobierno();
    this.estadisticatramitesHacinda();
  }

  cancelar() {
    this.goBack();
  }
  goBack(): void {
    this.location.back();
  }
  getTramite()
  {
    this.serviciosTramite.getTramite().subscribe(tramite => this.listaTramites = tramite);
    this.serviciosTramite.getTramiteGobierno('TramiteId').subscribe(tramite => this.listaTramites = tramite);
    this.serviciosTramite.getTramiteHacienda('TramiteId').subscribe(tramite => this.listaTramites = tramite);



  }
  getAllCertificados()
  {
    this.servicioDocumentos.getCertificados().subscribe(certificado => {
      this.certificados = certificado
      this.filtrarCertificados();
    })
  }
  filtrarCertificados()
  {
    
    this.total_certificados = 0;
    

    for (let index = 0; index < this.certificados.length; index++)
    {
      const element = this.certificados[index];
        if (element.fechacreacion != "" )
      {
        
        this.total_certificados++;
      }
      
    }
  }
  getSolicitudesTramites()
  {
    this.solicitudService.getStramite().subscribe(solic =>{
      this.solicitudes = solic
      this.en_proceso = 0;
      this.finalizados = 0;
      this.total = 0;

      this.finalizados_sectorial1 = 0;
      this.total_sectorial1 = 0;
      this.en_proceso_sectorial1 = 0;
      this.certificado_sectorial1 = 0;

      

      this.certificado1 = 0;
      this.certificado2 = 0;
      this.certificado3 = 0;
      this.certificado4 = 0;
      this.certificado5 = 0;

     
      
     
      for(let index = 0; index < this.solicitudes.length; index++)
      {
        const element = this.solicitudes[index];
        
        if (element.estado == "EN PROCESO")
        {
          this.en_proceso++;
        }
        if (element.estado == "FINALIZADO")
        {
          this.finalizados++
        }
        if (element.sectorial == "Recreación y Deporte")
        {
          if (element.estado == "EN PROCESO")
          {
            this.en_proceso_sectorial1 ++;
          }
          if (element.estado == "FINALIZADO")
          {
            this.finalizados_sectorial1++;
          }
          this.total_sectorial1++;

        }
       this.servicioDocumentos.getCertificados().subscribe(soli =>
        {
          this.certificados = soli
          for (let index = 0; index < this.certificados.length; index++)
          {
            const element1 = this.certificados[index];
            if(element.codstramite == element1.codstramite && element1.fechacreacion != "")
            {
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
                 if(element.sectorial == "Recreación y Deporte")
                 {
                  this.certificado_sectorial1++;

                 }
            }

          }

        });
      

      }
      this.total = this.solicitudes.length;
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

  getSolicitudesTramitesGobierno()
  {
    this.solicitudService.getStramite().subscribe(solic =>{
      this.solicitudes = solic
      this.en_proceso = 0;
      this.finalizados = 0;
      this.total = 0;

      this.finalizados_sectorial2 = 0;
      this.total_sectorial2 = 0;
      this.en_proceso_sectorial2 = 0;
      this.certificado_sectorial2 = 0;

      

      this.certificado6 = 0;
      this.certificado7 = 0;
      this.certificado8 = 0;
      this.certificado9 = 0;
      this.certificado10 = 0;

      
     
      for(let index = 0; index < this.solicitudes.length; index++)
      {
        const element = this.solicitudes[index];
        
        if (element.estado == "EN PROCESO")
        {
          this.en_proceso++;
        }
        if (element.estado == "FINALIZADO")
        {
          this.finalizados++
        }
        if (element.sectorial == "Gobierno")
        {
          if (element.estado == "EN PROCESO")
          {
            this.en_proceso_sectorial2 ++;
          }
          if (element.estado == "FINALIZADO")
          {
            this.finalizados_sectorial2++;
          }
          this.total_sectorial2++;

        }
       this.servicioDocumentos.getCertificados().subscribe(soli =>
        {
          this.certificados = soli
          for (let index = 0; index < this.certificados.length; index++)
          {
            const element1 = this.certificados[index];
            if(element.codstramite == element1.codstramite && element1.fechacreacion != "")
            {
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
                 if(element.sectorial == "Gobierno")
                 {
                  this.certificado_sectorial2++;

                 }
            }

          }

        });
      

      }
      this.total = this.solicitudes.length;
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

  getSolicitudesHacienda()
  {
    this.solicitudService.getStramite().subscribe(solic =>{
      this.solicitudes = solic
      this.en_proceso = 0;
      this.finalizados = 0;
      this.total = 0;

      this.finalizados_sectorial_3 = 0;
      this.total_sectorial_3 = 0;
      this.en_proceso_sectorial_3 = 0;
      this.certificado_sectorial_3 = 0;

      

      this.certificado11 = 0;
    
      
     
      for(let index = 0; index < this.solicitudes.length; index++)
      {
        const element = this.solicitudes[index];
        
        if (element.estado == "EN PROCESO")
        {
          this.en_proceso++;
        }
        if (element.estado == "FINALIZADO")
        {
          this.finalizados++
        }
        if (element.sectorial == "Hacienda")
        {
          if (element.estado == "EN PROCESO")
          {
            this.en_proceso_sectorial_3 ++;
          }
          if (element.estado == "FINALIZADO")
          {
            this.finalizados_sectorial_3++;
          }
          this.total_sectorial_3++;

        }
       this.servicioDocumentos.getCertificados().subscribe(soli =>
        {
          this.certificados = soli
          for (let index = 0; index < this.certificados.length; index++)
          {
            const element1 = this.certificados[index];
            if(element.codstramite == element1.codstramite && element1.fechacreacion != "")
            {
              if(element.codtramite == 11)
                 {
                   this.certificado11++;
                 }
                 
              }

          }

        });
      

      }
      this.total = this.solicitudes.length;
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

  async estadisticatramitesGobierno()
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

  async estadisticatramitesHacinda()
  {
    this.solicitudService.getStramite().subscribe(solic =>{
      this.solicitudes = solic 
      this.realizados11= 0;
      this.finalizados11 = 0;  
      this.en_proceso11 = 0;
      
  
  
      for(let index = 0; index < this.solicitudes.length; index++)
        {
          const element = this.solicitudes[index];
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
