import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding, MenuController } from '@ionic/angular';

import { Place } from './../place.model';
import { PlacesService } from './../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  loadedPlaces: Place[];

  constructor(private placesService: PlacesService, private menu: MenuController, private router: Router) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  onEdit(id: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigateByUrl(`/places/tabs/offers/edit/${id}`);

  }
}
