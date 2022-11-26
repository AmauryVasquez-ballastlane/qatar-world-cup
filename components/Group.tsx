import { Team } from './Team';
import styles from 'styles/group.module.scss';
import { useGroupTeams } from 'hooks/useGroupTeams';

const { group, groupNameText } = styles;

export const Group = (props: { groupName: string }) => {
  const { groupName } = props;
  const { teams, isLoading } = useGroupTeams(groupName);

  return (
    <div className={group}>
      <span className={groupNameText}> {'group ' + groupName} </span>
      {teams &&
        teams.map((team, i) => (
          <Team
            isLoading={isLoading}
            teamName={team}
            key={'team:' + team + 'component:' + i}
          />
        ))}
    </div>
  );
};
