import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export class CardValidator {
  // Custom error for alphanumeric input values
  private static NUMBERS_ONLY_ERR: ValidationErrors = {
    numbersOnly: true,
  };

  // Custom error for expired card
  private static CARD_EXPIRED: ValidationErrors = {
    expiration: true,
  };

  // Check if control value contains numbers only
  public static numbersOnly(abstractCtrl: AbstractControl): ValidationErrors | null {
    const ccNum: string = abstractCtrl.value;
    const NUMBERS_ONLY: RegExp = new RegExp(/^[0-9]+$/);
    return !NUMBERS_ONLY.test(ccNum) ? CardValidator.NUMBERS_ONLY_ERR : null;
  }

  // Check validity of the card
  public static expiration(formGroup: FormGroup): ValidationErrors | null {
    const expirationMonth: number = Number(formGroup.controls.expirationMonth.value);
    const expirationYear: number = Number(formGroup.controls.expirationYear.value);
    const expirationDate: Date = new Date(expirationYear, expirationMonth + 1, 0);
    return new Date().getTime() > expirationDate.getTime() ? CardValidator.CARD_EXPIRED : null;
  }
}
