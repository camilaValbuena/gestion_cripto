import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/screens/home/home.component';
import {LoginComponent} from './pages/screens/login/login.component';

const routes: Routes = [
  { path: 'home-component', component: HomeComponent},
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
