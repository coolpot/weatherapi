import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    GoogleMapsModule
  ],
  exports: [
    FormsModule,
    GoogleMapsModule
  ]
})
export class SharedModule { }
