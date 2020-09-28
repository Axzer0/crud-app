import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login.service';
import {Login} from '../shared/login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data= this.ls.getData()
  cols=['user','password']
  checker;


  form: Login={user:'',password:''}


  constructor(private ls: LoginService,
              private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(value) {
    console.log(value.user,value.password);
    for (let i = 0; i < this.data.length; i++) {
      if(value.user === this.data[i].user && value.password === this.data[i].password)
      {
        this.checker = 'Login Successful';
        this.router.navigate(["/nav"])
        break
      }
      else{
        this.checker = 'invalid'
      }
    }

  }
}
