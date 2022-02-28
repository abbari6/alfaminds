import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { TokenService } from 'src/app/shared/token.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
 
})
export class NavbarComponent implements OnInit{
  isSignedIn: boolean;


  constructor( 
    private auth: AuthStateService,
    private token: TokenService,
    private router: Router
  ) { }
  ngOnInit() {
    this.auth.userAuthState.subscribe(val => {
        this.isSignedIn = val;
    });
  }
    // Signout
  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  
  }

}
