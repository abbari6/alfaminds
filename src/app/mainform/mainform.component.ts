import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

export class User {
  name: String;
  email: String;
  id: number;
  mobile: string;
}

@Component({
  selector: 'app-mainform',
  templateUrl: './mainform.component.html',
  styleUrls: ['./mainform.component.css']
})
export class MainformComponent implements OnInit {
  UserProfile: User;
  constructor(
    private auth: AuthService
  ) {
    this.auth.profileUser().subscribe((data: any) => {
      console.log(data);
      this.UserProfile = data;
    })

  }



  ngOnInit(): void { }

}
