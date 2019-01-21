import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {


  username = '';
  email = '';
  pwd1Add = '';
  password = '';
  register ;


  constructor(private userService: UserService ) {

  }

  ngOnInit() {
    this.register = {
      username : '',
      email : '',
      password : ''
    };
  }

  onClick() {
    if (this.pwd1Add !== this.password) {
        return alert('password does not match');
    }
    this.userService.registerUser(this.register).subscribe(
      response => {
        alert('User' + this.register + 'has been created');
      },
      err => console.log('error', err)
    );
  }
}
