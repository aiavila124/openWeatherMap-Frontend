import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';
import { CCreateUser, CLogin } from '../models/models.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  constructor(private Service: AuthServiceService) {}
  private router = inject(Router);
  loginChecked: boolean = true;
  email: string = '';
  password: string = '';
  loginFailed: boolean = false;
  registerFailed: boolean = false;
  loginModel: CLogin = new CLogin();
  errorMessage: string = '';
  createUserModel: CCreateUser = new CCreateUser();

  getToken() {
    this.Service.getToken(this.loginModel).subscribe(
      (res:any) => {
        if (res.status == 200){
          localStorage.setItem('token', res.data.token);
          this.loginFailed = false;
          this.router.navigate(['/main-page']);
        } else {
          this.loginFailed = true;
        }
      },
      (error) => {
        this.loginFailed = true;
        this.errorMessage = error.error.data;
      }
    )
  }

  createUser() {
    this.Service.createUsers(this.createUserModel).subscribe(
      (res:any) => {
        if (res.status == 201) {
          this.registerFailed = false;
          this.loginModel.email = this.createUserModel.email;
          this.loginModel.password = this.createUserModel.password;
          this.getToken();
        } else {
          this.registerFailed = true;
        }
      },
      (err) => {
        this.registerFailed = true;
        this.errorMessage = err.error.data
      }
    )
  }
  
  setEmailAttribute() {
    if (this.loginChecked) {
      this.loginModel.email = this.email;
    } else {
      this.createUserModel.email = this.email;
    }
  }

  setPasswordAttribute() {
    if (this.loginChecked) {
      this.loginModel.password = this.password;
    } else {

      this.createUserModel.password = this.password;
    }
  }


  selectButton(buttonNumber: number) {
    if (buttonNumber==1) {
      this.loginChecked = true;
      this.loginFailed = false;
    } else if (buttonNumber==2) {
      this.loginChecked = false;
      this.loginFailed = false;
    }
  }

}
