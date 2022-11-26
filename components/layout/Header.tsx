import Link from 'next/link';
import Image from 'next/image';
import { MouseEvent } from 'react';

import { ToggleButton } from './ToggleButton';
import styles from 'styles/layout/header.module.scss';

const { header, homeLink, pageName } = styles;

export const Header = (props: {
  callback: (e: MouseEvent<HTMLButtonElement>) => void;
  showButton: boolean;
}) => {
  const { callback, showButton } = props;

  return (
    <header className={header}>
      <Link className={homeLink} href={'/'}>
        <Image
          src={'/worldCup.svg'}
          alt={'Qatar world cup logo'}
          height={400}
          width={200}
        />
        <span>
          FIFA WORLD CUP <br />
          Qatar 2022
        </span>
      </Link>
      <span className={pageName}> groups </span>
      <ToggleButton callback={callback} disabled={!showButton} />
    </header>
  );
};
