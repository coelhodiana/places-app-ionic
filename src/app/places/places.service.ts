import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manaus',
      'Coração da floresta Amazônica',
      // eslint-disable-next-line max-len
      'https://images.unsplash.com/photo-1590324493291-747afe32ff58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
      299.99
    ),
    new Place(
      'p2',
      'Manaus',
      'Flutuante nas margens do Rio Negro',
      // eslint-disable-next-line max-len
      'https://images.unsplash.com/photo-1574238959725-c727a8f8b4a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      1299.99
    ),
    new Place(
      'p3',
      'Manaus',
      'Barco Regional Hotel',
      // eslint-disable-next-line max-len
      'https://images.unsplash.com/photo-1604522564556-12cd5f53c390?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      120.99
    ),
    new Place(
      'p4',
      'Manaus 4',
      'Coração da floresta Amazônica',
      // eslint-disable-next-line max-len
      'https://images.unsplash.com/photo-1590324493291-747afe32ff58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
      299.99
    ),
    new Place(
      'p5',
      'Manaus 5',
      'Flutuante nas margens do Rio Negro',
      // eslint-disable-next-line max-len
      'https://images.unsplash.com/photo-1574238959725-c727a8f8b4a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      1299.99
    ),
    new Place(
      'p6',
      'Manaus 6',
      'Barco Regional Hotel',
      // eslint-disable-next-line max-len
      'https://images.unsplash.com/photo-1604522564556-12cd5f53c390?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      120.99
    ),
  ];

  constructor() {}

  get places() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._places];
  }

  getPlace(id: string) {
    // eslint-disable-next-line no-underscore-dangle
    return {...this._places.find((p) => p.id === id)};
  }
}
