import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-shortcuts',
  templateUrl: './menu-shortcuts.component.html',
  styleUrls: ['./menu-shortcuts.component.scss'],
})
export class MenuShortcutsComponent implements OnInit {
  navigateToSection(name: string) {
    document?.getElementById(name)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  constructor() {}

  ngOnInit(): void {}
}
