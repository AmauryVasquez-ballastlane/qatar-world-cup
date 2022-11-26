import { MouseEvent, useState } from 'react';

export const useTogglableMenu = () => {
  const [isVisible, setVisible] = useState(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    // e.currentTarget.blur();
    setVisible(!isVisible);
  };

  return { handleClick, isVisible };
};
