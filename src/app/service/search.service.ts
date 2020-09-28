import { Injectable } from '@angular/core';
import {search} from '../shared/tableData';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  transfer = search;


  constructor() { }

  setData(value){
    this.transfer = value;
  }

  getData():string{
    return this.transfer;
  }
}
