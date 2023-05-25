import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  signupUsers: any[] = [];

  signupObj = {
    username: '',
    email: '',
    password: '',
  };

  loginObj = {
    email: '',
    password: '',
  };

  loggedInUser: any = {};

  constructor() {}
  ngOnInit() {
    const localData = localStorage.getItem('signUpUsers');

    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignUp() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));

    this.signupObj = {
      username: '',
      email: '',
      password: '',
    };
  }

  onLogin() {
    const UserExist = this.signupUsers.find((m) => {
      m.email == this.loginObj.email && m.password == this.loginObj.password;

      return m;
    });
    console.log(UserExist);
    if (UserExist) {
      this.loggedInUser = UserExist;
      alert('User Login Successful');
    } else {
      alert('Wrong Credentails');
    }
  }
}
