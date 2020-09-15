import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientRegistrationModule } from './patient-registration/patient-registration.module';
import { HttpService } from './shared/service/http.service';
import { DataService } from './shared/service/data.service';
import {HttpClientModule} from '@angular/common/http'
import { DatePipe } from '@angular/common'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PatientRegistrationModule,
    HttpClientModule
  ],
  providers: [HttpService,DataService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
