import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { PlacesService } from './../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private modal: ModalController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
      console.log(this.place);

    });
  }

  onBookPlace() {
    //.this.navCtrl.navigateBack('/places/tabs/discover');
    this.modal.create({component: CreateBookingComponent}).then(modalEl => {
      modalEl.present();
    });
  }
}
