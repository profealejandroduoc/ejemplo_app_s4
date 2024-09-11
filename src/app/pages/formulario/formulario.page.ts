import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  mensaje:string=''
  usr:Usuario={
    username:'',
    password:''
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.usr);
    if(this.usr.username=="wacoldo" && this.usr.password=="123"){
      console.log("Acceso ok");
        this.router.navigate(['/home'])
    }
    else{
      this.mensaje='Acceso Denegado';
    }
  }

}
