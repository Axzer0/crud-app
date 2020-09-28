import { Injectable } from '@angular/core';
import {TableData} from '../shared/tableData';
import {Table} from '../shared/Table';

@Injectable({
  providedIn: 'root'
})
export class ForTableService {

  data = TableData
  constructor() { }

  getData(): Table[] {
    return this.data;
  }

  setDate(value: Table[]){
    this.data = value;
  }
}
