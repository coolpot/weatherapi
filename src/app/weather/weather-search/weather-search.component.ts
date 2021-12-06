import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/shared/interfaces/weather';
import { WeatherDataService } from '../weather-data.service';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})
export class WeatherSearchComponent implements OnInit {
  query = '';

  errorMessage: any = {};

  constructor(private weatherService: WeatherService,
              private weatherDataService: WeatherDataService) { }

  ngOnInit(): void {
  }

  set weather(data: Weather) {
    this.weatherDataService.weather = data;
  }

  search() {
    this.weatherService
      .searchWeatherData(this.query)
      .subscribe(
        weather => this.weather = weather,
        error => this.errorMessage = <any>error,
        () => this.query = ''
      );
  }

}
