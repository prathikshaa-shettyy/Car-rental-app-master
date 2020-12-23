import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CoreRoutingModule } from './core/core-routing.module';
import { UserRoutingModule } from './user/user-routing.module';
import { BookingRoutingModule } from './booking/booking-routing.module';


const routes: Routes = [
  {path:'',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BookingRoutingModule,CoreRoutingModule,UserRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
