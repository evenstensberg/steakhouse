import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-menu-title',
  templateUrl: './sub-menu-title.component.html',
  styleUrls: ['./sub-menu-title.component.scss'],
})
export class SubMenuTitleComponent implements OnInit {
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  constructor() {}

  ngOnInit(): void {}
}
