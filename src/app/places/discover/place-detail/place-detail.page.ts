import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';

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
    private modal: ModalController,
    private actionSheet: ActionSheetController
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

    this.actionSheet.create({
      header: 'Escolha uma ação',
      buttons: [
        {
          text: 'Selecione a data',
          handler: ()=>{
            this.openBookingModal('select');
          }
        },
        {
          text: 'Data Aleatória',
          handler: ()=>{
            this.openBookingModal('random');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    }).then(actionSheetEl => {
      actionSheetEl.present();
    });

  }

  openBookingModal(mode: 'select' | 'random') {
    console.log(mode);
    this.modal
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.place },
      })
      .then((modalEl) => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then((resData) => {
        console.log(resData.data, resData.role);
        if (resData.role === 'confirm') {
          console.log('ok');
        }
      });
  }
}
