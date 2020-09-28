import { Component, OnInit, ViewChild } from '@angular/core';
import {Table} from '../../shared/Table';
import {ForTableService} from '../../service/for-table.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @ViewChild('aForm') add_formDirective

  updateArray = this.fts.getData()
  add_form: FormGroup;

  constructor(private fts: ForTableService,
              private fb: FormBuilder)
  {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
    this.add_form = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required]
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


}
