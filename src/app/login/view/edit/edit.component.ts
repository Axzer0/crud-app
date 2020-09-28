import { Component, OnInit,Input,Output,EventEmitter, ViewChild } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Table} from '../../../shared/Table';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Input() data: Table;
  @Output() onChange = new EventEmitter();
  @ViewChild('eForm') edit_formDirective;

  edit_form: FormGroup;
  edit_id: number;
  edit_name;edit_email;


  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    this.setValue()
  }

  createForm(){
    this.edit_form = this.fb.group({
      name: [this.edit_name,Validators.required],
      email:[this.edit_email,Validators.required]
    });
  }

  setValue(){
    this.edit_id = this.data.id;
    this.edit_name = this.data.name;
    this.edit_email = this.data.email;
    console.log(this.edit_id,this.edit_name,this.edit_email);
    this.edit_form.setValue({name: this.edit_name, email: this.edit_email})
  }

  onSubmit(){
    let val = this.data;
    val.name = this.edit_form.value.name;
    val.email = this.edit_form.value.email;
    this.onChange.emit(val);
    this.edit_form.reset(
      {name:'',email:''}
    );
    this.edit_formDirective.resetForm();
  }

  clear(){

    this.edit_formDirective.resetForm();

  }

}
