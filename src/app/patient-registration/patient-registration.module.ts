import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { PatientRegistrationRoutingModule } from './patient-registration-routing.module';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    PatientRegistrationRoutingModule
  ]
})
export class PatientRegistrationModule { }
