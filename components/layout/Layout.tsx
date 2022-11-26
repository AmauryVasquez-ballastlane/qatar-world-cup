import { Sider } from './Sider';
import { Header } from './Header';
import { useTogglableMenu } from 'hooks/useTogglableMenu';
import styles from 'styles/layout/content.module.scss';

const { layout, content } = styles;

export const Layout = (props: { children: JSX.Element }) => {
  const { isVisible, handleClick } = useTogglableMenu();
  const { children } = props;

  return (
    <div className={layout}>
      <Header callback={handleClick} showButton={!isVisible} />
      {isVisible && <Sider callback={handleClick} />}
      <div className={content}>{children}</div>
    </div>
  );
};
