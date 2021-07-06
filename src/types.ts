import { CARD_STATUS, LEVEL } from "values/enums";

export interface Card {
  value: number;
  status: CARD_STATUS;
}
export type Cards = Card[];

export type Score = {
  score: number;
  player: string;
  level: LEVEL;
};
