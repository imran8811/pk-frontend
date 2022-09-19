import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  mainMenu: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu = () => {
    this.mainMenu = !this.mainMenu
  }

}
