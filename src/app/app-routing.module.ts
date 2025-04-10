import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripTimelineComponent } from './trip-timeline/trip-timeline.component';

const routes: Routes = [
  { path:'',component:TripTimelineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
