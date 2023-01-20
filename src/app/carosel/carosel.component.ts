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
  images: Array<SliderImages> = [
    {
      url: '/assets/burger.jpeg',
      alt: 'Burger',
      title: 'Classic american burger',
      caption: 'Dressing, salat og mye kjøtt',
    },
    {
      url: '/assets/plankebiff.jpeg',
      alt: 'Plankebiff',
      title: 'Plankebiff',
      caption: 'God biff, med potetmos og godt tilbehør',
    },
    {
      url: '/assets/pizza.jpeg',
      alt: 'Pizza',
      title: 'Pizza',
      caption: 'Pizza med pepperoni, mais og løk',
    },
    {
      url: '/assets/jarritos.jpeg',
      alt: 'Jarritos brus',
      caption: 'Jarritos',
      title: 'Frisk brus',
    },
    {
      url: '/assets/dessert-1.jpeg',
      alt: 'Dessert',
      caption: '3 kuler vaniljeis, med krem og saus',
      title: 'Dessert',
    },
    {
      url: '/assets/creme.jpeg',
      alt: 'Dessert',
      caption: 'Karamelisert fløte',
      title: 'Creme Brulee',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
