import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-up-section',
  templateUrl: './scroll-up-section.component.html',
  styleUrls: ['./scroll-up-section.component.scss'],
})
export class ScrollUpSectionComponent implements OnInit {
  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  constructor() {}

  ngOnInit(): void {}
}
