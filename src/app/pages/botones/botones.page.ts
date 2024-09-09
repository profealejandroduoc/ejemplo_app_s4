import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.page.html',
  styleUrls: ['./botones.page.scss'],
})
export class BotonesPage implements OnInit {

  mensaje:string=''
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onCLick(){
    console.log("Boton presionado");
    this.mensaje="Hola desde el botón";
  }

  navegar(){
    console.log("navegar");
    this.router.navigate(['/home'])

  }
}
