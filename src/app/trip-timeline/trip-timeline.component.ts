import { Component } from '@angular/core';
import { Trip } from './trip.model';

@Component({
  selector: 'app-trip-timeline',
  templateUrl: './trip-timeline.component.html',
  styleUrls: ['./trip-timeline.component.css']
})
export class TripTimelineComponent {
  start = '';
  end = '';
  trips: Trip[] = [];

  addTrip() {
    if (this.start && this.end) {
      this.trips.push({ from: this.start.trim(), to: this.end.trim() });
      this.start = '';
      this.end = '';
    }
  }

  getCode(city: string): string {
    return city.substring(0, 3).toUpperCase();
  }

  isContinued(index: number): boolean {
    if (index === 0) return true;
    return this.trips[index - 1].to === this.trips[index].from;
  }

  isRepeated(index: number): boolean {
    if (index === 0) return false;
    const prev = this.trips[index - 1];
    const curr = this.trips[index];
    return prev.from === curr.from && prev.to === curr.to;
  }
}
