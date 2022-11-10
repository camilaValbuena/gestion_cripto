import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';
import { UserService } from 'src/app/services/user.service';
import { CountryService } from './../../../services/country.service';

export interface Country {
  id: number;
  nombre: string;
}
export interface User {
  id: number;
  nombre: string;
}
export interface Managers {
  id: number;
  nombre: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  showModal:boolean = false;
  
  countries:Country[] | undefined = undefined;
  users:User[] | undefined = undefined;
  manager:Managers[] | undefined = undefined;
  

  constructor(private countryService: CountryService, private userService: UserService, private managerService: ManagerService) { 
   
  }

  ngOnInit(): void {
    this.getCountries();
    this.getManagers();
    this.getUsers();  
  }
 
  openModal(){
    this.showModal = true;
  }

  closeModal(close: boolean){
    this.showModal = close;    
  }

  getCountries(){
    this.countryService.getCountriesHttp().subscribe((resp)=>{
      this.countries = resp;
    });
  }

  getUsers(){
    this.userService.getUsersHttp().subscribe((resp)=>{
      this.users = resp;
    })
  }

  getManagers(){
    this.managerService.getManagersHttp().subscribe((resp)=>{
      this.manager = resp;
    })
  }
  
}
