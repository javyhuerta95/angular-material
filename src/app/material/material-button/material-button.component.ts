import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-material-button',
  templateUrl: './material-button.component.html',
  styleUrls: ['./material-button.component.scss']
})
export class MaterialButtonComponent implements OnInit {

  // Es un binding
  formulario = {
    valido : true
  };
  constructor() {   }

  ngOnInit() {
    setTimeout(() => {
      this.formulario.valido = false;
    }, 5000);
  }

  // Parametro propio de angular
  onClick($event) {
    console.log('Evento click ', $event);
  }

}
