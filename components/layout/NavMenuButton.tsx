import { MouseEvent } from 'react';

import styles from 'styles/layout/navigation.module.scss';

interface NavMenuButtonProps {
  text: string;
  callback: (e: MouseEvent<HTMLButtonElement>) => void;
}

const { navMenuButton, dropDownIcon } = styles;

export const NavMenuButton = ({ text, callback }: NavMenuButtonProps) => {
  return (
    <button className={navMenuButton} onClick={callback}>
      {text}
      <div className={dropDownIcon}>
        <i />
      </div>
    </button>
  );
};
