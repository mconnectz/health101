import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

import { UserService } from './user.service';
import { User } from './user.model';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  loggedIn = false;
  isSadmin = false;

  isHadmin = false;
  isPadmin = false;
  isLadmin = false;
  isDoctor = false;
  isHospital = false;
  isLab = false;
  isPharm = false;
  isLabAssist = false;
  isPatient = false;

  currentUser: User = new User();

  constructor(private userService: UserService,
              private router: Router,
              private jwtHelper: JwtHelperService) {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = this.decodeUserFromToken(token);
      this.setCurrentUser(decodedUser);
    }
  }

  login(usernameAndPassword) {
    return this.userService.login(usernameAndPassword).map(
      res => {
        localStorage.setItem('token', res.token);
        const decodedUser = this.decodeUserFromToken(res.token);
        this.setCurrentUser(decodedUser);
        return this.loggedIn;
      }
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.isSadmin = false;
    this.isHadmin = false;
    this.isPadmin = false;
    this.isLadmin = false;
    this.isDoctor = false;
    this.isHospital = false;
    this.isLab= false;
    this.isPharm = false;
    this.isLabAssist = false;
    this.isPatient = false;
    this.currentUser = new User();
    this.router.navigate(['/home']);
  }

  decodeUserFromToken(token) {
    return this.jwtHelper.decodeToken(token).user;
  }

  setCurrentUser(decodedUser) {
    this.loggedIn = true;
    this.currentUser._id = decodedUser._id;
    this.currentUser.username = decodedUser.username;
    this.currentUser.photo = decodedUser.photo;
    this.currentUser.role = decodedUser.role;
    decodedUser.role === 'Doctor' ? this.isDoctor = true : this.isDoctor = false;
    decodedUser.role === 'Hadmin' ? this.isHadmin = true : this.isHadmin = false;
    decodedUser.role === 'Hospital' ? this.isHospital = true : this.isHospital = false;
    decodedUser.role === 'Lab' ? this.isLab = true : this.isLab = false;
    decodedUser.role === 'LabAssist' ? this.isLabAssist = true : this.isLabAssist = false;
    decodedUser.role === 'Ladmin' ? this.isLadmin = true : this.isLadmin = false;
    decodedUser.role === 'Padmin' ? this.isPadmin = true : this.isPadmin = false;
    decodedUser.role === 'Patient' ? this.isPharm = true : this.isPharm = false;
    decodedUser.role === 'Pharm' ? this.isPharm = true : this.isPharm = false;  
    decodedUser.role === 'Sadmin' ? this.isSadmin = true : this.isSadmin = false;
    delete decodedUser.role;
  }

}
