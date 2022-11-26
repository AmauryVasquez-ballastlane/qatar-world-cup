import { useState, MouseEvent } from 'react';

export const useClosableComponent = (callback: Function) => {
  // Constants
  const groupNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  // State
  const [willComponentClose, setWillClose] = useState(false);

  const onClose = (e: MouseEvent<HTMLButtonElement>) => {
    setWillClose(true);
    setTimeout(() => {
      setWillClose(false);
      callback();
    }, 300);
  };

  return { groupNames, onClose, willComponentClose };
};
