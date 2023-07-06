import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightReactiveEditComponent } from './flight-reactive-edit.component';

describe('FlightReactiveEditComponent', () => {
  let component: FlightReactiveEditComponent;
  let fixture: ComponentFixture<FlightReactiveEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FlightReactiveEditComponent]
    });
    fixture = TestBed.createComponent(FlightReactiveEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
