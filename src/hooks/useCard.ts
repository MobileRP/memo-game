import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import {
  flipCard as flipCardAction,
} from 'store';
import { CARD_STATUS } from "values";

type UseCard = {
  flipCard: (id: number) => void;
  isBusy: boolean;
  status: CARD_STATUS
};
export const useCard = (id:number): UseCard => {
  const isBusy = useSelector((state: RootState) => state.game.isBusy);
  const status = useSelector((state: RootState) => state.game.statuses[id]);
  const dispatch = useDispatch();

  const flipCard = (id: number) => !isBusy && dispatch(flipCardAction(id));
  return { flipCard, isBusy , status};
};
