import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class PromotionService {
    getPromotions(): Observable<Promotion[]> {
      return of(PROMOTIONS).pipe(delay(2000));
    }
  
    getPromotion(id: string): Observable<Promotion> {
      return of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000));
    }
  
    getFeaturedPromotion(): Observable<Promotion> {
      return of(PROMOTIONS.filter((promo) => promo.featured)[0]).pipe(delay(2000));
    }
  constructor() { }
}
