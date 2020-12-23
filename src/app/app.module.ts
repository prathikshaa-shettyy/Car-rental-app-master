import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { SignInComponent } from './shared/sign-in/sign-in.component';
import { HomeComponent } from './home/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { BookingRoutingModule } from './booking-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { CoreRoutingModule } from './core/core-routing.module';
import { UserRoutingModule } from './user/user-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignInComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BookingRoutingModule,
    HomeRoutingModule,
    CoreRoutingModule,
    UserRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
