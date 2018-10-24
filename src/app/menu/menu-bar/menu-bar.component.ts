import { Component, OnInit } from '@angular/core';

import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  menus = [
    { display: 'Home', href: '/', tip: 'Home page' },
    { display: 'Users', href: '/users/list', tip: 'Users page' },
    { display: 'About', href: '/about', tip: 'About page' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
