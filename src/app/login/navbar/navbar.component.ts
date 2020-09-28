import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../service/search.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  search: string;
  constructor(private ss: SearchService,
              private router: Router) { }

  click(){
    this.ss.setData(this.search);
    this.router.navigate(['/search'])

  }

  ngOnInit(): void {
  }

}
