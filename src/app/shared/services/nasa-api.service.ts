import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

const APO_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'DEMO_KEY';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  private readonly  DATA: Apod = {
    title: 'Shiba Inu',
    date: '2018-12-25',
    explanation: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    hdurl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    media_type: 'image',
    service_version: 'v1'
  };

  // Injeccion de dependencias
  constructor(private hhtpCliente: HttpClient) { }

  getApod(): Observable<Apod> {
     return this.hhtpCliente.get<Apod>(APO_URL + '?api_key=' + API_KEY);
    // return this.DATA;
    // return this.hhtpCliente;
  }
}
