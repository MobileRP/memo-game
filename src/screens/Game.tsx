import { Results } from 'components';
import { useGame } from 'hooks';
import React from 'react';
import { ScreenWrapper } from 'components/ScreenWrapper/ScreenWrapper';
import { Table } from 'components/Table/Table';
import './style.scss';
import { useHistory } from 'react-router-dom';

export const Game: React.FC = () => {
  const { cards, isCompleted, getCurrentScore } = useGame();
  const history = useHistory();
  const goBackHandler = () => history.push('/');
  return (
    <ScreenWrapper>
      {isCompleted ? (
        <Results score={getCurrentScore} />
      ) : !!cards.length ? (
        <Table cards={cards} />
      ) : (
        <div>
          <h1>Set up player and choose difficulty</h1>
          <button onClick={goBackHandler}>Take me back</button>
        </div>
      )}
    </ScreenWrapper>
  );
};
