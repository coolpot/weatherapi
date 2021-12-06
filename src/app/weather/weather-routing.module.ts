import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherViewComponent } from './weather-view/weather-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WeatherViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
