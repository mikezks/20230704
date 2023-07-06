import { Routes } from "@angular/router";
import { FlightSearchComponent } from "./flight-search/flight-search.component";

const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'flight-search',
        pathMatch: 'full'
      },
      {
        path: 'flight-search',
        component: FlightSearchComponent
      }
    ]
  }
];

export default FLIGHT_BOOKING_ROUTES;
