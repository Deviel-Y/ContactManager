import { useEffect } from "react";
import useStore from "../Store";
import groupService from "../Services/groupService";
import { Group } from "../Entites/Group";

const useGroups = () => {
  const setGroups = useStore((s) => s.setGroups);

  useEffect(() => {
    const { cancel, request } = groupService.getAll<Group[]>();

    request.then((res) => setGroups(res.data));

    return () => cancel();
  }, [setGroups]);
};

export default useGroups;
