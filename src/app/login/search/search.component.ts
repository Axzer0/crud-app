import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../service/search.service';
import {ForTableService} from '../../service/for-table.service';
import {Table} from '../../shared/Table';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  tobeSearched = this.ss.getData(); //receive data from input
  checker;// just for testing
  find;// ng model for the search
  searchedInfo: Array<Table> =[];// setting up object for displaying data
  data = this.fts.getData(); // receiving array from service
  constructor(private ss: SearchService,
              private fts: ForTableService) { }

  ngOnInit(): void {
    this.toFind(this.tobeSearched)// initial search
  }

  toFind(value){
    let repeat=null;
    let searched:Table;
    this.searchedInfo.splice(0,this.searchedInfo.length)
    if (value == null){
      this.checker = "Empty Parameters";

    }
    else{

      for (let i = 0 ; i < this.data.length ; i++){
        if( this.data[i].name.toUpperCase().trim() === value.toUpperCase().trim())
        {
          this.checker = 'data match';
          searched = this.data[i];
          console.log(searched)
          console.log(this.searchedInfo)
          this.searchedInfo.push(searched);
          repeat++;
        }

        if (repeat == null){
          this.checker = "no match";
          this.searchedInfo.splice(0,this.searchedInfo.length)
        }
      }
    }

  }

}

// else if( this.data[i].name != value)
// {this.checker='not found';this.searchedInfo=null}
