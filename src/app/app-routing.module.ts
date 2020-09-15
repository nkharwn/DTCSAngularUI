import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{path:'',redirectTo:"/registration",pathMatch:"full"},
{path:'registration', loadChildren:()=>import("./patient-registration/patient-registration.module").then(m=>m.PatientRegistrationModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
