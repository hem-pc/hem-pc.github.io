import { CardService } from './../../services/card.service';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CardValidator } from '../../utils/validator';
import { ErrorMessagesEnum } from '../../models/Enums/ErrorMessagesEnum.model';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-save-card',
  templateUrl: './save-card.component.html',
  styleUrls: ['./save-card.component.scss'],
})
export class SaveCardComponent implements OnInit {
  cardForm!: FormGroup;
  months: Array<string> = [];
  years: Array<number> = [];
  ccNumMissingTxt = ErrorMessagesEnum.CARD_NUM_MISSING;
  ccNumTooShortTxt = ErrorMessagesEnum.CARD_NUM_SHORT;
  ccNumTooLongTxt = ErrorMessagesEnum.CARD_NUM_LONG;
  ccNumContainsLettersTxt = ErrorMessagesEnum.CARD_NUM_NUMBER_ONLY;
  cardHolderMissingTxt = ErrorMessagesEnum.CARD_USERNAME_MISSING;
  cardHolderTooLongTxt = ErrorMessagesEnum.CARD_USERNAME_LONG;
  expirationMonthMissingTxt = ErrorMessagesEnum.CARD_EXP_MONTH_MISSING;
  expirationYearMissingTxt = ErrorMessagesEnum.CARD_EXP_YEAR_MISSING;
  ccvMissingTxt = ErrorMessagesEnum.CARD_CCV_MISSING;
  ccvNumTooShortTxt = ErrorMessagesEnum.CARD_CCV_SHORT;
  ccvNumTooLongTxt = ErrorMessagesEnum.CARD_CCV_LONG;
  ccvContainsLettersTxt = ErrorMessagesEnum.CARD_CCV_NUMBER_ONLY;
  cardExpiredTxt = ErrorMessagesEnum.CARD_EXPIRED;
  validateCCNum = true;
  validateCardHolder = true;
  validateExpirationMonth = true;
  validateExpirationYear = true;
  validateCardExpiration = true;
  validateCCV = true;
  currentCardBackground: number = Math.floor(Math.random()* 25 + 1)

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly cardService: CardService,
    private readonly snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.setUpForm();
    this.setUpDateValues();
  }

  private setUpForm() {
    this.cardForm = this.formBuilder.group(
      {
        cardNumber: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(12),
            Validators.maxLength(16),
            CardValidator.numbersOnly,
          ]),
        ],
        cardHolder: ['', [Validators.required, Validators.maxLength(22)]],
        expirationMonth: ['', Validators.required],
        expirationYear: ['', Validators.required],
        ccv: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(4),
            CardValidator.numbersOnly,
          ]),
        ],
      },
      {
        validator: CardValidator.expiration,
      } as AbstractControlOptions
    );
  }

  private setUpDateValues(): void {
    this.months = this.cardService.getMonths();
    this.years = this.cardService.getYears();
  }

  getCardType(cardNumber: string): string | null {
    return this.cardService.getCardType(cardNumber);
  }

  saveCard() {
    console.log(this.cardForm.value);
    let config: MatSnackBarConfig = {
      duration: 50 * 1000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: 'snackbar_wrapper'
    }
    this.snackBar.open('Success !','',config)
  }
}
