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
  standalone: false
})
export class CaroselComponent implements OnInit {
  images: Array<any> = [
    {
      url: '/assets/1.jpg',
      alt: 'Burger'
    },
    {
      url: '/assets/2.jpg',
      alt: 'Dessert'
    },
    {
      url: '/assets/3.jpg',
      alt: 'Middag'
    },
    {
      url: '/assets/4.jpg',
      alt: 'Biffsnadder'
    },
        {
      url: '/assets/5.jpg',
      alt: 'Snadder'
    },
    {
      url: '/assets/6.jpeg',
      alt: 'Jarritos brus'
    },
  ];

  constructor() { }

  ngOnInit(): void { }
}
