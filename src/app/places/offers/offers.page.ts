import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { Place } from './../place.model';
import { PlacesService } from './../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  loadedPlaces: Place[];

  constructor(private placesService: PlacesService, private menu: MenuController) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }


}
