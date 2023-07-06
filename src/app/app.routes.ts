import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NextFlightsComponent } from "./next-flights/next-flights.component";
import { FlightEditComponent } from "./flight-edit/flight-edit.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'flight-booking',
    loadChildren: () => import('./flight-booking/flight-booking.routes')
  },
  {
    path: 'flight-search',
    loadComponent: () => import('./flight-search/flight-search.component'),
    data: {
      label: 'Flights'
    }
  },
  {
    path: 'flight-edit/:id',
    component: FlightEditComponent
  },
  {
    path: 'flight-next',
    component: NextFlightsComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
