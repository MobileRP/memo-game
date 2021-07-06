import { useUser } from 'hooks';
import { useScore } from 'hooks/useScore';
import React from "react";
import './style.scss';
import { useHistory } from 'react-router-dom';
import { LEVEL } from "values";

type Props = {
  score: { score:number , level: LEVEL };
};
export const Results: React.FC<Props> = ({ score }) => {
  const history = useHistory();
  const { user } = useUser();
  const { setScore } = useScore();

  const onClickHandler = () => {
    setScore({ ...score , player: user });
    history.push('scores');
  };
  return (
    <div className={'container'}>
      <div className='disclaimer'>YOUR SCORE</div>
      <h1>{score.score}</h1>
      <button className={'scores-button'} onClick={onClickHandler}>
        Take me to Leaders
      </button>
    </div>
  );
};
