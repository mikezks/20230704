import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flight, initialFlight } from '../../../../../src/app/model/flight';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FlightEditComponent } from '../../../../../src/app/flight-edit/flight-edit.component';
import { FlightReactiveEditComponent } from '../../../../../src/app/flight-reactive-edit/flight-reactive-edit.component';
import { CONFIG } from '../config';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnDestroy {
  private dialog = inject(MatDialog);
  private config = inject(CONFIG);
  private injector = inject(Injector);
  @Input() item: Flight = initialFlight;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  ngOnInit(): void {
    console.log('Flight Card INIT');
    console.log(this.config);
    this.injector.get(CONFIG);
  }

  toggleSelection(): void {
    this.selected = !this.selected;
    this.selectedChange.next(this.selected);
  }

  edit() {
    this.dialog.open(FlightReactiveEditComponent, {
      data: { flight: { ...this.item } },
      minWidth: '70%',
      panelClass: 'edit-dialog'
    });
  }

  ngOnDestroy(): void {
    console.log('Flight Card DESTROY');
  }
}
