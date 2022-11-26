import { DropwdownMenu } from './DropdownMenu';
import { NavMenuButton } from './NavMenuButton';
import { useGroupsKeys } from 'hooks/useGroupsKeys';
import { useTogglableMenu } from 'hooks/useTogglableMenu';
import styles from 'styles/layout/navigation.module.scss';
import { useClosableComponent } from 'hooks/useClosableComponent';

const { groupsNavigation } = styles;

export const GroupsNavigation = () => {
  const { isVisible, handleClick } = useTogglableMenu();
  const { willComponentClose, onClose } = useClosableComponent(handleClick);
  const { groupsKeys, isLoading } = useGroupsKeys();

  const generateNavigationItems = () => {
    if (!groupsKeys || isLoading) return [];
    return groupsKeys.map((groupKey) => {
      return { text: `group ${groupKey}`, path: `/group/${groupKey}` };
    });
  };

  return (
    <menu className={groupsNavigation}>
      <NavMenuButton
        text="groups"
        callback={isVisible ? onClose : handleClick}
      />
      <DropwdownMenu
        willClose={willComponentClose}
        isVisible={isVisible}
        items={generateNavigationItems()}
      />
    </menu>
  );
};
