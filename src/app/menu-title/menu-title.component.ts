import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.scss'],
})
export class MenuTitleComponent implements OnInit {
  @Input() menuTitle: string = '';
  @Input() imageUrl: string = '';
  @Input() description: string = '';
  @Input() idTag: string = '';
  constructor() {}

  ngOnInit(): void {}
}
