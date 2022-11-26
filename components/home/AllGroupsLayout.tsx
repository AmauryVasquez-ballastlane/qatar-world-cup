import { Group } from 'components/Group';
import { useGroupsKeys } from 'hooks/useGroupsKeys';
import styles from 'styles/home/groupsLayout.module.scss';
import { FallbackScreen } from 'components/FallbackScreen';

const { groupsLayout } = styles;

export const AllGroupsLayout = () => {
  const { groupsKeys, isLoading } = useGroupsKeys();

  if (isLoading) return <FallbackScreen />;

  return (
    groupsKeys && (
      <div className={groupsLayout}>
        {groupsKeys.map((groupKey, i: number) => (
          <Group key={`group${groupKey}component:${i}`} groupName={groupKey} />
        ))}
      </div>
    )
  );
};
