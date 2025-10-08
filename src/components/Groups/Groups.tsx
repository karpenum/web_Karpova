'use client';

import useGroups from '@/hooks/useGroups';
import type GroupInterface from '@/types/GroupInterface';
import styles from './Groups.module.scss';

const Groups = (): React.ReactElement => {
  const { groups } = useGroups();

  return (
    <div className={styles.Groups}>
      {groups.map((group: GroupInterface) => (
        <h2 key={group.id}>
          {group.name}
        </h2>
      ))}
    </div>
  );
};

export default Groups;
