import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { NextFlightsModule } from './app/next-flights/next-flights.module';
import { provideConfig } from '@flight42/ui-common';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideConfig({
      firstname: 'Michael',
      lastname: 'Mayer'
    }),
    importProvidersFrom(NextFlightsModule)
  ],
});
