import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LabComponent } from './lab/lab.component';
import { HospitalComponent } from './hospital/hospital.component';
import { PharmComponent } from './pharm/pharm.component';

import { AuthGuardLogin } from './services/auth-login.service';
import { SuperAdmin } from './services/sadmin';
import { Pharmacy } from './services/Pharm.service';
import { Patient } from './services/Patient.service';
import { PharmacyAdmin } from './services/Padmin.service';
import { LabAdmin } from './services/Ladmin.service';
import { LabAssist } from './services/Labassist.service';
import { Lab } from './services/Lab.service';
import { Hospital } from './services/Hospital.service';
import { HospitalAdmin } from './services/Hadmin.service';
import { Doctor } from './services/Doctor.service';


const route: Routes = [
  { path: 'home',component: HomeComponent },
  { path: 'account',component: AccountComponent,canActivate: [AuthGuardLogin] },
  { path: 'dashboard',component:DashboardComponent,canActivate: [SuperAdmin]},
  { path: 'lab',component:LabComponent,canActivate: [SuperAdmin]},
  { path: 'pharmacy',component:PharmComponent,canActivate: [SuperAdmin]},
  { path: 'hospital',component:HospitalComponent,canActivate: [SuperAdmin]},
  { path: 'login',component: LoginComponent },
  { path: 'register',component: RegisterComponent }, 
  { path:'',redirectTo:'/home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})

export class RoutingModule { }
