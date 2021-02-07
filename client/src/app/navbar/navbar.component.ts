import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  search = '';
  focus = true;

  clearSearch(){
    this.search = '';
  }

  searchFocus(){
    console.log("aa");
    this.focus = true;
  }

  searchFocusOut(){
    this.focus = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
