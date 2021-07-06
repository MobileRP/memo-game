import React, { ChangeEvent, useState } from 'react';
import { useGame } from 'hooks/useGame';
import { LEVEL } from 'values';
import { ScreenWrapper } from 'components';
import './style.scss';
import { useUser } from 'hooks';
import { useHistory } from 'react-router-dom';

const levels = [LEVEL.EASY, LEVEL.NORMAL, LEVEL.HARD];

export const Home: React.FC = () => {
  const { setUser, user } = useUser();
  const { setLevel, startNewGame, level } = useGame();
  const history = useHistory();
  const [userInput, setUserInput] = useState('');
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };
  const startNewGameHandler = () => {
    startNewGame();
    history.push('/game');
  };
  const resetUser =()=>{
    setUser('')
  }
  return (
    <ScreenWrapper>
      <div className="container">
        {!user ? (
          < >
            <input onChange={changeHandler} value={userInput} placeholder={'type name'.toUpperCase()} />
            <button onClick={() => setUser(userInput)}>SET USER</button>
          </>
        ) : (
          <>
            <h1>HELLO {user}</h1>
            <h4>choose difficulty and start a game</h4>
            <select
              value={level}
              onChange={({ target: { value } }) => {
                setLevel(value as unknown as LEVEL);
              }}
            >
              {levels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
            <button onClick={startNewGameHandler}>NEW GAME</button>
            <button onClick={resetUser}>NEW USER</button>
          </>
        )}
      </div>
    </ScreenWrapper>
  );
};
