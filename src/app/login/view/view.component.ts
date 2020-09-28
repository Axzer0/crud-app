import { Component, OnInit } from '@angular/core';
import {ForTableService} from '../../service/for-table.service';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog.component';
import {MatTableDataSource} from '@angular/material/table';
import {Table} from '../../shared/Table';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(private fs: ForTableService,
              private dialog: MatDialog) { }

   data = this.fs.getData() // fetch data
   dataSource = new MatTableDataSource(this.data); // set data into data source
   cols = ['id','name','email']; // column names
   rowData; // to store data of selected row
   rowId;// for edit
   index;// for array index of selected row
   jargon: Table={id:null,name:'',email:''};// data received from child

  ngOnInit(): void {
  }

  click(val){
    let i=0;
    for(i;i<this.data.length;i++){
      if(this.data[i].id === val.id)
      {
        this.index = i;
      }
    }

    this.rowData = this.data[this.index];

    const dialogRef = this.dialog.open(DialogComponent,{data: {row: this.rowData}});

    dialogRef.afterClosed().subscribe(result =>{
      console.log(result);

      if (result === 'true'){

        this.remove();
      }
      else if (result === 'false')
      { this.rowId = this.index + 1}

    })
  }


  edit(val){
        this.jargon.id = this.index + 1;
        this.jargon.name = val.name;
        this.jargon.email = val.email;
        this.data.splice(this.index,1,this.jargon);
        this.dataSource._updateChangeSubscription();
        console.log(this.data);
        this.fs.setDate(this.data);
  }


  remove(){
      this.data.splice(this.index,1);
      this.dataSource._updateChangeSubscription()
      console.log(this.data);
      for (let i =0 ; i < this.data.length;i++)
      {
        this.data[i].id = i+1;
      }
      this.fs.setDate(this.data);
  }
}
