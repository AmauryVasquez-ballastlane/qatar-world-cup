import { getFlag } from 'utils/getflags';
import styles from 'styles/team.module.scss';

const { team, loading } = styles;

export const Team = (props: { isLoading: boolean; teamName: string }) => {
  const { isLoading, teamName } = props;
  const flagSvg = getFlag(teamName);

  if (isLoading) return <span className={`${team} ${loading}`}></span>;

  return (
    <span className={`${team}`}>
      {flagSvg} {teamName}
    </span>
  );
};
