import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-formulario-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {

  constructor (private servicio:LoginService){}

  email:any;
  password:any;

  login(formulario:any){
    //console.log(formulario.value);
    this.servicio.postLogin(formulario.value).subscribe(acceso =>{
      //console.log(acceso);
      let token=acceso.accessToken
      if(token!=''){
      localStorage.setItem("login","true");
      }
    })


  }



}
