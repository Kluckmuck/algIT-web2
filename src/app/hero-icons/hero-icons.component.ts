import { Component, OnInit } from '@angular/core';
import { faLayerGroup, faPalette, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero-icons',
  templateUrl: './hero-icons.component.html',
  styleUrls: ['./hero-icons.component.scss']
})
export class HeroIconsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  faLayerGroup = faLayerGroup;
  faPalette = faPalette;
  faMobileAlt = faMobileAlt;
}
