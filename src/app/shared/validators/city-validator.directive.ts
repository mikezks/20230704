import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: 'input[city]',
  standalone: true,
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CityValidatorDirective,
    multi: true
  }]
})
export class CityValidatorDirective implements Validator {
  @Input('city') validCities: string[] = [];

  validate(control: AbstractControl): ValidationErrors | null {
    if (control?.value && !this.validCities.includes(control.value)) {
      return {
        city: {
          actualCity: control.value,
          validCities: this.validCities
        }
      };
    }

    return null;
  }
}
