import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flight, initialFlight } from '../model/flight';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FlightEditComponent } from '../flight-edit/flight-edit.component';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnDestroy {
  private dialog = inject(MatDialog);
  @Input() item: Flight = initialFlight;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  ngOnInit(): void {
    console.log('Flight Card INIT');
  }

  toggleSelection(): void {
    this.selected = !this.selected;
    this.selectedChange.next(this.selected);
  }

  edit() {
    this.dialog.open(FlightEditComponent, {
      data: { flight: { ...this.item } },
      minWidth: '70%',
      panelClass: 'edit-dialog'
    });
  }

  ngOnDestroy(): void {
    console.log('Flight Card DESTROY');
  }
}
