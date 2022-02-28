import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { AuthService } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  errors = null;
  userId = null;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.minLength(8)),
  })

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService
  ) { }
  loginUser() {
    //console.log(this.loginForm.value);
    this.authService.signin(this.loginForm.value)
      .subscribe(
        result => {
          console.log(result);
          
         //alert("Login successfull");
          this.responseHandler(result);
        },
        error => {
          this.errors = error.error;
        },
        () => {
          this.loginForm.reset()
        }
      );
  }

  // Handle response
  responseHandler(data) {
    this.token.handleData(data.access_token );
    //console.log(data.access_token);
  // console.log(data.user.email);
    this.userId = data.user.email;
   // console.log(this.userId);
     this.authState.setAuthState(true);
    this.router.navigate(['main']);
    this.token.handleUserid(data.user.email);
  }
  

  


}




