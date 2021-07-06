import { useCard } from "hooks/useCard";
import React from "react";
import { CARD_STATUS } from "values";
import { Back } from "./Back";
import { Front } from "./Front";
import "./style.scss";

export interface CardInterface {
  value: number;
  status: CARD_STATUS;
}
interface Props {
  id: number;
  item: CardInterface;
}

export const Card: React.FC<Props> = ({ id, item }) => {
  const {  flipCard, status } = useCard(id);
  const flip = () => {
    status === CARD_STATUS.BACKFACE && flipCard(id);
  };

  return (
    <div
      onClick={flip}
      className={`card ${(status === CARD_STATUS.BACKFACE)  ? "covered" : ""}`}
    >
      <Back />
      <Front content={item.value} />
    </div>
  );
};
