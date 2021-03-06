import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
const baseurl = 'http://localhost:8000/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseurl : any;

  constructor(private http: HttpClient , 
    private token: TokenService ,
    
    ) { 
     // console.log("Auth Service Constructor is called");
      //this.user_id = this.token.getUserid();
    }
    
  register(data:any)
  {
    return this.http.post(baseurl +'register', data)
  }
  
  signin(data:any)
  {
    return this.http.post(baseurl+'login', data)
  }
// Access user profile
profileUser() {
  return this.http.get(baseurl +'user-profile');
}
//Access user contacts
contactUsers(){
  var userId =  this.token.getUserid();
  return this.http.get(baseurl+'list/'+userId );
}
//add new contact
addContact(data:any){
  return this.http.post(baseurl +'addContact',data);
}

 
}
