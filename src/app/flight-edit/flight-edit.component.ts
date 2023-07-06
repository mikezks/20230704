import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Flight } from '../model/flight';
import { ValidationErrorsComponent } from '../shared/validation-errors/validation-errors.component';
import { CityValidatorDirective } from '../shared/validation/city-validator.directive';
import { AsyncCityValidatorDirective } from '../shared/validation/async-city-validator.directive';
import { RoundtripValidatorDirective } from '../shared/validation/roundtrip-validator.directive';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-flight-edit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ValidationErrorsComponent,
    CityValidatorDirective,
    AsyncCityValidatorDirective,
    RoundtripValidatorDirective,
  ],
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css'],
})
export class FlightEditComponent {
  route = inject(ActivatedRoute);
  id = 0;
  showDetails = false;
  flight: Flight = {
    id: 333,
    from: 'San Francisco',
    to: 'Miami',
    date: new Date().toISOString(),
    delayed: true
  };

  constructor() {
    this.route.paramMap.subscribe(
      params => {
        this.id = +(params.get('id') || 0);
        this.showDetails = params.get('showDetails')?.toLocaleLowerCase() === 'true';
        this.flight.id = this.id;
      }
    );
  }
}
