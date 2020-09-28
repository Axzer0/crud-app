import { Injectable } from '@angular/core';
import {Login} from '../shared/login';
import {LoginData} from '../shared/loginData';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  data= LoginData

  constructor() { }

  getData(): Login[]{
    return LoginData;
  }

  setData(value: Login[]){
    this.data = value;
  }
}
