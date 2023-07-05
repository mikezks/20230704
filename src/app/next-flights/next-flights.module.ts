import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextFlightsComponent } from './next-flights.component';
import { CheckinComponent } from './checkin/checkin.component';
import { NextFlightsService } from './data-access/next-flights.service';



@NgModule({
  declarations: [
    NextFlightsComponent,
    CheckinComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    NextFlightsService
  ],
  exports: [
    NextFlightsComponent
  ]
})
export class NextFlightsModule {
  nextFlightsService = inject(NextFlightsService);

  constructor() {
    console.log(this.nextFlightsService.flights);
  }
}
