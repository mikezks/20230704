import { Injectable } from '@angular/core';

@Injectable()
export class NextFlightsService {
  flights = [
    {
      id: 123,
      from: 'Rom',
      to: 'Athen',
      date: new Date().toISOString(),
      delayed: false
    }
  ];

  constructor() { }
}
