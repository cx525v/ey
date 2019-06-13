import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './components/doctor/doctor.component';
import { DoctorsComponent } from './components/doctors/doctors.component';

const routes: Routes = [
  { path: '', component: DoctorsComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'doctor/:id', component: DoctorComponent },
  { path: '**', component: DoctorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
