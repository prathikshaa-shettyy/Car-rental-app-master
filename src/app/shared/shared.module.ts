import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninModalComponent } from './signin-modal/signin-modal.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



@NgModule({
  declarations: [SigninModalComponent, SigninComponent, SignupComponent, ResetPasswordComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
