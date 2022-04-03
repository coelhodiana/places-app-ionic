import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Place } from '../../places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;

  constructor(private modal: ModalController) { }

  ngOnInit() {}

  onCancel() {
    this.modal.dismiss(null, 'cancel');
  }

  onBookPlace() {
    this.modal.dismiss({message: 'Teste mensagem!'}, 'confirm');

  }

}
