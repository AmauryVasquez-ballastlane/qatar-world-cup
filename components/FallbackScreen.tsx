import styles from 'styles/fallbackScreen.module.scss';

const { loadingScreen, loaderWrapper } = styles;

export const FallbackScreen = () => {
  return (
    <div className={loadingScreen}>
      <div className={loaderWrapper}>
        <div />
        <div />
      </div>
    </div>
  );
};
