import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../shared/model/estudiante';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent implements OnInit {

  student1: Estudiante;
  student2: Estudiante;
  student3: Estudiante;

  constructor() { }

  ngOnInit() {
    console.log('Componente Inicializado');
    this.student1 = {
      id: 1,
      nombre: 'Javy',
      ciudad: 'Rosarito'
    };

    this.student2 = {
      id: 2,
      nombre: 'Huerta',
      ciudad: 'Tijuana'
    };

    this.student3 = {
      id: 3,
      nombre: 'JH',
      ciudad: 'Ensenada'
    };
  }

}
