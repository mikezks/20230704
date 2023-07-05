import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
  standalone: true
})
export class CityPipe implements PipeTransform {

  transform(value: string, format?: 'short' | 'long'): string {
    let short = '';
    let long = '';

    switch (value) {
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
      case 'Paris':
        short = 'CDG';
        long = 'Charles de Gaulle Airport';
        break;
      case 'London':
        short = 'LCY';
        long = 'London City Airport';
        break;
      case 'Berlin':
        short = 'BER';
        long = 'Flughafen Berlin Brandenburg - Willy Brandt';
        break;
      default:
        long = short = value;
    }

    if (format === 'short') {
      return short;
    }

    return long;
  }

}
