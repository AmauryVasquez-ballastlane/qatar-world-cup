import Link from 'next/link';

import styles from 'styles/layout/dropdownMenu.module.scss';

interface DropwdownMenuProps {
  isVisible: boolean;
  items: { text: string; path: string }[];
  willClose: boolean;
}

const { navigationMenu, hidden, navigationItem, closeMenu } = styles;

export const DropwdownMenu = ({
  isVisible,
  items,
  willClose,
}: DropwdownMenuProps) => {
  return (
    <ul
      className={`${
        isVisible ? (willClose ? closeMenu : navigationMenu) : hidden
      }
      `}
    >
      {items.map((groupKey, i) => (
        <Link
          href={`${groupKey.path}`}
          className={navigationItem}
          key={`navigationitem:${groupKey.text}${i}`}
        >
          {`${groupKey.text}`}
        </Link>
      ))}
    </ul>
  );
};
