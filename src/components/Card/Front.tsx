import React from 'react';
import './style.scss';
interface Props {
  content: string | number;
}
export const Front: React.FC<Props> = ({ content }) => {
  return (
    <div className="front">
      <div>{content}</div>
    </div>
  );
};
