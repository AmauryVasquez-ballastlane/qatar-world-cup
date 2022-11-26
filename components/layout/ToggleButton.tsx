import { MouseEvent } from 'react';

import styles from 'styles/layout/toggleButton.module.scss';

const { menuButton, disabledButton } = styles;

export const ToggleButton = (props: {
  callback: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
}) => {
  const { callback, disabled } = props;

  return (
    <button
      className={`${menuButton} ${disabled && { disabledButton }}`}
      disabled={disabled}
      onClick={callback}
    >
      <div />
      <div />
      <div />
    </button>
  );
};
