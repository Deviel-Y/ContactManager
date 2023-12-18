import { useQuery } from "@tanstack/react-query";
import groupService from "../Services/groupService";

const useGroups = () => {
  const fetchGroups = () => {
    return groupService.getAll().then((res) => res.data);
  };

  return useQuery({
    queryKey: ["group"],
    queryFn: fetchGroups,
  });
};

export default useGroups;
