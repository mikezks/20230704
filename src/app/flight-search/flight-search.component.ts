import { Component, computed, effect, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { Flight } from '../model/flight';
import { FormsModule } from '@angular/forms';
import { FlightService } from './flight.service';
import { CityPipe } from '../shared/city.pipe';
import { FlightCardComponent } from '@flight42/ui-common';
import { debounceTime } from 'rxjs';

@Component({
    selector: 'app-flight-search',
    standalone: true,
    templateUrl: './flight-search.component.html',
    styleUrls: ['./flight-search.component.css'],
    imports: [CommonModule, FormsModule, CityPipe, FlightCardComponent]
})
export class FlightSearchComponent {
  from = signal('London', {
    equal: (a, b) => a === b
  });
  to = 'Paris';
  flights: Array<Flight> = [];
  selectedFlight: Flight | undefined;
  flightRoute = computed(() => 'We fly from ' + this.from());
  fromDebounce = toSignal(
    toObservable(this.from).pipe(
      debounceTime(300)
    ), { initialValue: '' }
  );

  basket: Record<number, boolean> = {
    3: true,
    5: true,
    363: true
  }

  private flightService = inject(FlightService);

  constructor() {
    effect(() => console.log(this.from()));

    setTimeout(() => this.from.set('Frankfurt'));


    setTimeout(() =>this.from.set('Rom'));
    setTimeout(() =>this.from.set('Madrid'));
    setTimeout(() =>this.from.set('Kiew'));
  }

  search(): void {
    // Reset properties
    this.selectedFlight = undefined;

    this.flightService.find(this.from(), this.to).subscribe({
      next: (flights) => {
        this.flights = flights;
      },
      error: (errResp) => {
        console.error('Error loading flights', errResp);
      },
    });
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
