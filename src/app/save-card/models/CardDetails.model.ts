import { CardModel } from "./CardModel.mode";

export class CardDetails implements CardModel {
  public cardHolder: string;
  public cardNumber: string;
  public ccv: number;
  public expirationMonth: string;
  public expirationYear: string;

  constructor(cardHolder: string, cardNumber: string, ccv: number, expirationMonth: string, expirationYear: string) {
    this.cardHolder = cardHolder;
    this.cardNumber = cardNumber;
    this.ccv = ccv;
    this.expirationYear = expirationYear;
    this.expirationMonth = expirationMonth;
  }
}
