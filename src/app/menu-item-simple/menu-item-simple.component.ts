import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../environments/types';

@Component({
  selector: 'app-menu-item-simple',
  templateUrl: './menu-item-simple.component.html',
  styleUrls: ['./menu-item-simple.component.scss'],
})
export class MenuItemSimpleComponent implements OnInit {
  @Input() arr: Array<MenuItem> = [];
  constructor() {}

  ngOnInit(): void {}
}
