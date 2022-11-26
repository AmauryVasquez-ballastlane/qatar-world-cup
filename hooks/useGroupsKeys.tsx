import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { GroupData } from 'interfaces/group';
import { getGroupKeys } from 'utils/getGroupKeys';

export const useGroupsKeys = (initialData?: GroupData) => {
  // Initial query
  const { data, isLoading, isError } = useQuery({
    queryKey: ['groups-keys'],
    queryFn: getGroupKeys,
    initialData,
  });

  // Groups state management
  const [groupsKeys, setKeys] = useState<string[]>([]);

  // Effects
  useEffect(() => {
    if (!isLoading && !isError) {
      setKeys(data);
    }
  }, [isLoading, data]);

  return { groupsKeys, isLoading, isError };
};
