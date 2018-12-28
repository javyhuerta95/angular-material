import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.scss']
})
export class MaterialInputComponent implements OnInit {

  usuario = {
    nombre: 'javy'
  };

  constructor() { }

  ngOnInit() {
  }
  onKeyUp($event) {
    console.log($event);
  }
}
