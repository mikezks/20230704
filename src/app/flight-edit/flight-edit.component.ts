import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Flight } from '../model/flight';
import { CityValidatorDirective } from '../shared/validators/city-validator.directive';

@Component({
  selector: 'app-flight-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, CityValidatorDirective],
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent {
  dialogRef = inject(MatDialogRef);
  data = inject<{ flight: Flight }>(MAT_DIALOG_DATA)

  /* id = 0;
  from = 'Graz';
  to = 'Hamburg';
  date = new Date().toISOString(); */

  save(): void {
    console.log(this.data.flight);
  }

}
