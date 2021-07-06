import React from 'react';
import './style.scss'

export const ScreenWrapper: React.FC = ({children}) => {
  return (
    <div className={'screen-wrapper'}>
      {children}
    </div>
  );
};
