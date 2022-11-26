import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { GroupData } from 'interfaces/group';

export const useGroupTeams = (groupName: string, initialData?: GroupData) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [`group${groupName}teams`],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5005/api/group/${groupName}/teams`
      );
      return await res.json();
    },
    initialData,
  });

  const [teams, setTeams] = useState<string[]>(['', '', '', '']);
  useEffect(() => {
    if (!isLoading && !isError) setTeams(() => data.teams);
  }, [isLoading, data]);

  return { teams, isLoading };
};
