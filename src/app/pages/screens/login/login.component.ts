import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { //Implementar la libraria y que el componente lo reciba en su clase, libreia que se encarga de regirigir las rutas

  }

  ngOnInit(): void {
  }

  login(){
    console.log('Soy Consola')
    this.router.navigateByUrl('home-component')
  }

}
