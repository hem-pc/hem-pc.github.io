import { CardTypeEnum } from "../models/Enums/CardTypeEnum.model";

const CARD_TYPES: Map<string, RegExp> = new Map();
CARD_TYPES.set(CardTypeEnum.AMERICAN_EXPRESS, new RegExp('^3[47]'));
CARD_TYPES.set(CardTypeEnum.MAESTRO, new RegExp('^(50|5[6-8]|6)[0-9]{12,19}$'));
CARD_TYPES.set(
  CardTypeEnum.MASTERCARD,
  new RegExp('^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$')
);
CARD_TYPES.set(CardTypeEnum.VISA_ELECTRON, new RegExp('^(4026|417500|4508|4844|491([37]))'));
CARD_TYPES.set(CardTypeEnum.VISA, new RegExp('^4'));

export default CARD_TYPES;
export type CardTypesContainer = typeof CARD_TYPES;
