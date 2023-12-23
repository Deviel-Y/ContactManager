import { useQuery } from "@tanstack/react-query";
import groupService from "../Services/groupService";
import { GROUP_QUERY_KEY_CACHE } from "../constants";

const useGroups = () => {
  const fetchGroups = () => {
    return groupService.getAll().then((res) => res.data);
  };

  return useQuery({
    queryKey: GROUP_QUERY_KEY_CACHE,
    queryFn: fetchGroups,
  });
};

export default useGroups;
