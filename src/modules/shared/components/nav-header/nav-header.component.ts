import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {
  mainMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu = () => {
    this.mainMenu = !this.mainMenu
  }

}
