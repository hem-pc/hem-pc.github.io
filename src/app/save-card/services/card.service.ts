import { Injectable } from '@angular/core';
import { Month } from '../models/Enums/MonthEnum.model';
import { default as CARD_TYPES, CardTypesContainer } from '../utils/cardTypes';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor() {}

  private static readonly cardTypes: CardTypesContainer = CARD_TYPES;

  // Return card type based on card number
  public getCardType(cardNumber: string): string | null {
    for (const [key, val] of Array.from(CardService.cardTypes.entries())) {
      if (cardNumber.split(new RegExp('[ \\-]')).join('').match(val)) {
        return key;
      }
    }
    return 'VISA';
  }

  // Return month values
  public getMonths(): Array<Month> {
    const months: Array<Month> = [];
    for (let key of Object.values(Month)) {
      months.push(key);
    }
    return months;
  }

  // Return year values
  public getYears(): Array<number> {
    const years: Array<number> = [];
    const year = new Date().getFullYear();
    for (let i = -1; i < 7; i++) {
      years.push(year + i);
    }
    return years;
  }
}
