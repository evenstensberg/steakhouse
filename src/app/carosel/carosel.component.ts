import { Component, OnInit } from '@angular/core';

interface SliderImages {
  alt: string;
  url: string;
  caption: string;
  title: string;
}

@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.scss'],
})
export class CaroselComponent implements OnInit {
  images = [944, 1011, 984].map((n) => {
    return {
      url: `https://picsum.photos/id/${n}/900/500.jpg`,
      alt: 'For a11y',
      caption: 'Plankebiff med poteter, mais og mye snadder!',
      title: 'Plankebiff',
    };
  });
  constructor() {}

  ngOnInit(): void {}
}
