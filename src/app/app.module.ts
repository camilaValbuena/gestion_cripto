import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/screens/home/home.component';
import { LoginComponent } from './pages/screens/login/login.component';
import { TableComponent } from './pages/components/table/table.component';
import { AddCurrencyComponent } from './pages/components/add-currency/add-currency.component';
import { SelectComponent } from './pages/components/select/select.component';
import { CountryService } from './services/country.service'
import { UserService } from './services/user.service';
import { ManagerService } from './services/manager.service';
import { CurrencyService } from './services/currency.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TableComponent,
    AddCurrencyComponent,
    SelectComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CountryService,
    UserService,
    ManagerService,
    CurrencyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
