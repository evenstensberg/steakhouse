import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../environments/types';

@Component({
  selector: 'app-menu-item-with-description',
  templateUrl: './menu-item-with-description.component.html',
  styleUrls: ['./menu-item-with-description.component.scss'],
})
export class MenuItemWithDescriptionComponent implements OnInit {
  @Input() arr: Array<MenuItem> = [];
  constructor() {}

  ngOnInit(): void {}
}
