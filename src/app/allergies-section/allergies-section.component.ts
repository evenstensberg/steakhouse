import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allergies-section',
  templateUrl: './allergies-section.component.html',
  styleUrls: ['./allergies-section.component.scss'],
})

export class AllergiesSectionComponent implements OnInit {
  allergies = [
    { name: 'Hvete' },
    { name: 'Skalldyr' },
    { name: 'Egg' },

    { name: 'Fisk' },

    { name: 'Peanøtt' },

    { name: 'Soya' },

    { name: 'Melk' },

    { name: 'Cashewnøtter' },

    { name: 'Selleri' },

    { name: 'Sennep' },
    { name: 'Sesam' },
    { name: 'Sulfitt' },
    { name: 'Soyalecitin' },
    { name: 'Bløtdyr' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
