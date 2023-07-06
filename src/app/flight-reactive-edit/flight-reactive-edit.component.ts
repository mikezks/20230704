import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Flight } from '../model/flight';
import { debounceTime } from 'rxjs';
import { validateCity, validateCityWithParams } from '../shared/validators/city-validator';

@Component({
  selector: 'app-flight-reactive-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './flight-reactive-edit.component.html',
  styleUrls: ['./flight-reactive-edit.component.css']
})
export class FlightReactiveEditComponent {
  dialogRef = inject(MatDialogRef);
  data = inject<{ flight: Flight }>(MAT_DIALOG_DATA)
  fb = inject(FormBuilder);
  // fb = inject(NonNullableFormBuilder);

  editForm = this.fb.nonNullable.group({
    id: [0],
    from: ['Wien', [
      Validators.required,
      Validators.minLength(3),
      validateCity
    ]],
    to: ['Frankfurt', [
      Validators.required,
      Validators.minLength(3),
      validateCityWithParams([
        'London', 'Berlin'
      ])
    ]],
    date: [new Date().toISOString()]
  }, { updateOn: 'blur' });

  constructor() {
    this.editForm.patchValue(
      this.data.flight
    );

    this.editForm.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(console.log);
  }

  save(): void {
    console.log('value', this.editForm.value);
    console.log('raw value', this.editForm.getRawValue());
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);
  }
}
