import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CurrencyService } from './../../../services/currency.service';
export interface Currency {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-add-currency',
  templateUrl: './add-currency.component.html',
  styleUrls: ['./add-currency.component.scss']
})
export class AddCurrencyComponent implements OnInit { 

  currency:Currency[] | undefined = undefined;
  idSelect:number = 0;

  @Output() close: EventEmitter<boolean> = new EventEmitter();//Emitir - Enviar

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.getCurrency();  
  }

  closeModal(){
    
    this.close.emit(false);
  }

  getCurrency(){
    this.currencyService.getCurrencysHttp().subscribe((resp)=>{
      this.currency = resp;
    })
  }

  getIdSelect(idSelect: number){
    this.idSelect = idSelect;
  }

  save(){    
  }

}
