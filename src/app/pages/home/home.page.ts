import { Component, OnInit } from '@angular/core';
import { Itemlist } from 'src/app/interfaces/itemlist';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  vinculos:Itemlist[]=[{
    ruta:'/botones',
    titulo:'Botones',
    icono:'apps-outline'
  },
    {
      ruta:'/alertas',
      titulo:'Alertas',
      icono:'warning-outline'

  },
  {
    ruta:'/formulario',
    titulo:'Formulario',
    icono:'reader-outline'

},
{
  ruta:'/actionsheet',
  titulo:'Action Sheet',
  icono:'layers-outline'

},

  ];

  constructor() { }

  ngOnInit() {
  }

}
