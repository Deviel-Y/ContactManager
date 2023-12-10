import { useEffect } from "react";
import useStore from "../Store";
import groupService from "../Services/groupService";
import { Group } from "../Entites/Group";

const useGroups = () => {
  const setGroups = useStore((s) => s.setGroups);
  useEffect(() => {
    groupService.getAll<Group[]>().then((res) => setGroups(res.data));
  }, [setGroups]);
};

export default useGroups;
