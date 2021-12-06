import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/shared/interfaces/weather';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})
export class WeatherItemComponent implements OnInit {
  
  
  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit(): void {
  }

  get weather(): Weather {
    return this.weatherDataService.weather;
  }

}
