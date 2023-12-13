import { useQuery } from "@tanstack/react-query";
import { Group } from "../Entites/Group";
import groupService from "../Services/groupService";

const useGroups = () => {
  const fetchGroups = () => {
    return groupService.getAll<Group[]>().then((res) => res.data);
  };

  return useQuery({
    queryKey: ["group"],
    queryFn: fetchGroups,
  });
};

export default useGroups;
