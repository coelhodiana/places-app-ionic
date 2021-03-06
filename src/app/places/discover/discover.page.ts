import { Component, OnInit } from '@angular/core';
import { MenuController, SegmentChangeEventDetail } from '@ionic/angular';

import { Place } from '../place.model';
import { PlacesService } from './../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];

  constructor(private placesService: PlacesService, private menu: MenuController) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

  onOpenMenu() {
    this.menu.toggle();
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }
}
