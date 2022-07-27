import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-view',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchText:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
