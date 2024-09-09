import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {

  accion:string=''

  clase:string=''

  alertButtons=[{
    text:'Aceptar',
    cssClass:'btnAceptarStyle',
    handler:()=>{
      this.accion='Presionó aceptar';
    }
  },{
    text:'Cancelar',
    cssClass:'btnCancelarStyle',
    handler:()=>{
      this.accion="Presionó cancelar";
    }
  }] 

  constructor(private alertctrl:AlertController) { }

  ngOnInit() {
  }


  async mostrarAlerta(event:any){
    console.log(event.srcElement.id);
    const alert = await this.alertctrl.create({
      header: 'Alert Controller',
      subHeader: 'Esto sale con controller en TS',
      message: 'Es otra forma de hacer alertas',
      cssClass:this.clase,
      buttons: [{
      text:'❤️',
      handler:()=>{
        this.accion='presionó ❤️';
      }
      },'💔'],
    });

    await alert.present();
  }
  }


