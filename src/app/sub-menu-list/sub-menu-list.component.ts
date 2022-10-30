import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../environments/types';

@Component({
  selector: 'app-sub-menu-list',
  templateUrl: './sub-menu-list.component.html',
  styleUrls: ['./sub-menu-list.component.scss'],
})
export class SubMenuListComponent implements OnInit {
  @Input() arr: Array<MenuItem> = [];
  constructor() {}

  ngOnInit(): void {}
}
