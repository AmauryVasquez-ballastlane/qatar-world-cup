import { useState, MouseEvent } from 'react';

export const useLayout = () => {
  const [isSiderActive, setActive] = useState(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setActive(!isSiderActive);
  };

  return { isSiderActive, handleClick };
};
