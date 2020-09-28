import { Component, OnInit, ViewChild } from '@angular/core';
import {Table} from '../../shared/Table';
import {ForTableService} from '../../service/for-table.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Login} from '../../shared/login';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @ViewChild('aForm') add_formDirective
  @ViewChild('lForm') login_formDirective


  updateArray = this.fts.getData()
  loginArray = this.ls.getData()
  add_form: FormGroup;
  login_form: FormGroup;

  constructor(private fts: ForTableService,
              private fb: FormBuilder,
              private ls: LoginService)
  {
    this.createForm();
    this.createForm1();
  }

  ngOnInit(): void {
  }

  createForm(){
    this.add_form = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required]
    })
  }

  createForm1(){
    this.login_form = this.fb.group({
      user:['',Validators.required],
      password:['',Validators.required]
    })
  }

  onSubmit(){
    let value:Table={id:null,name:'',email:''};
    value.id = this.updateArray.length + 1
    value.name = this.add_form.value.name;
    value.email = this.add_form.value.email;
    this.updateArray.push(value);
    this.fts.setDate(this.updateArray);
    console.log(this.updateArray)
    this.add_formDirective.resetForm();
  }

  onClose(){
    this.add_formDirective.resetForm();
  }

  onSubmit1(){
    let value:Login={user:'',password:''};
    value.user = this.login_form.value.user;
    value.password = this.login_form.value.password;
    this.loginArray.push(value);
    this.ls.setData(this.loginArray);
    console.log(this.loginArray)
    this.login_formDirective.resetForm();
  }

  onClose1(){
    this.login_formDirective.resetForm();
  }

  showForm(val){
    if ( val === 'login'){document.getElementById("f1").style.display='none';document.getElementById("f2").style.display='block';}
    else if(val === 'data'){document.getElementById("f1").style.display='block';document.getElementById("f2").style.display='none';}
    else{document.getElementById("f1").style.display='none';document.getElementById("f2").style.display='none';}
  }


}
