import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
export interface Currency {
  id: number;
  nombre: string;
}
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() options: any | undefined;
  @Output() idOption: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeOption(event: any){
    this.idOption.emit(event.target.value);
  }

}
