import { Component } from '@angular/core';
import { FormGroup, FormControl,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
 hide = true;

  registerForm= new FormGroup({
    name: new FormControl('',[Validators.required]),
    mobile: new FormControl('', Validators.pattern('[0-9 ]*')),
    email: new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', Validators.minLength(8)),
  })
    
  get email() { return this.registerForm.get('email');}
  get name() { return this.registerForm.get('name');}
  get mobile() { return this.registerForm.get('mobile');}
  get password() { return this.registerForm.get('password'); }

  constructor(
    private router: Router,
    private authService: AuthService
 ) { }
 errors = null;
  registerUser()
  {
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value)
    .subscribe(
      result=> {
        console.log(result);
      },
      error => {
        this.errors = error.error;
      },
      ()=>
       {
         this.registerForm.reset()
         this.router.navigate(['confirm'])
       }
    )
  }
 }



 