import { ScreenWrapper } from 'components/ScreenWrapper/ScreenWrapper';
import { useScore } from 'hooks/useScore';
import React from 'react';

export const Scores: React.FC = () => {
  const { scores } = useScore();
  return (
    <ScreenWrapper>
      <div className="container wider-container">
        <h3>HALL OF FAME</h3>
        <ol>
          {scores.map(({ player, score, level }) => (
            <li key={score + player}>
              <span className={'left'}>{player}</span>
              <span>{level}</span>
              <span className={'right'}>{score}</span>
            </li>
          ))}
        </ol>
      </div>
    </ScreenWrapper>
  );
};
