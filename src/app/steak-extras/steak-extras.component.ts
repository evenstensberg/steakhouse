import { Component, OnInit, Input } from '@angular/core';
import { BeefSide } from '../../environments/types';

@Component({
  selector: 'app-steak-extras',
  templateUrl: './steak-extras.component.html',
  styleUrls: ['./steak-extras.component.scss'],
})
export class SteakExtrasComponent implements OnInit {
  @Input() sauces: Array<BeefSide> = [];
  @Input() sides: Array<BeefSide> = [];
  constructor() {}

  ngOnInit(): void {}
}
