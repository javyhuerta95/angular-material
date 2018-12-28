import { Component, OnInit } from '@angular/core';
import { Apod } from '../shared/model/apod';
import { NasaApiService } from '../shared/services/nasa-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  apod: Apod;
  constructor(private nasaAPI: NasaApiService) { }

  ngOnInit() {
    this.apod = this.nasaAPI.getApod().subscribe((data: Apod) => {
      setTimeout(() => {
        this.apod = data;
      }, 5000);
    });
  }

}
