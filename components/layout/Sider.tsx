import Link from 'next/link';
import { MouseEvent } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { useClosableComponent } from 'hooks/useClosableComponent';
import styles from 'styles/layout/sider.module.scss';
import { GroupsNavigation } from './GroupsNavigation';

const { sider, closeSider, top, closeButton, siderHomeLink, navigationMenu } =
  styles;

export const Sider = (props: {
  callback: (e: MouseEvent<HTMLButtonElement>) => void;
}) => {
  const { willComponentClose, onClose } = useClosableComponent(props.callback);

  return (
    <div className={`${sider} ${willComponentClose && closeSider}`}>
      <div className={top}>
        <button className={closeButton} onClick={onClose}>
          <AiOutlineClose />
        </button>
        <Link className={siderHomeLink} href={'/'}>
          FIFA WORLD CUP
        </Link>
      </div>
      <nav className={navigationMenu}>
        <GroupsNavigation />
      </nav>
    </div>
  );
};
