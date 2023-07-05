import { FlightService } from './flight-search/flight.service';
import { Component, inject } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlightSearchComponent } from "./flight-search/flight-search.component";

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
      SidebarComponent,
      NavbarComponent,
      FlightSearchComponent
    ]
})
export class AppComponent {
  title = 'Hello Angular! :)';
  private flightService = inject(FlightService);

  constructor() {
    this.flightService.find('Frankfurt', 'Zürich')
      .subscribe(
        flights => console.log(flights)
      );
  }

  changeTitle(): void {
    this.title = 'Hello Michael!';
  }
}
