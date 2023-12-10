import { useEffect } from "react";
import Contact from "../Entites/Contact";
import { Group } from "../Entites/Group";
import groupService from "../Services/groupService";
import useStore from "../Store";
import contactService from "../Services/contactService";

const useContact = () => {
  const setContacts = useStore((s) => s.setContacts);
  const setGroups = useStore((s) => s.setGroups);

  useEffect(() => {
    const contactHttpService = contactService.getAll<Contact[]>();
    const groupHttpSevice = groupService.getAll<Group[]>();

    contactHttpService.then((res) => setContacts(res.data));

    groupHttpSevice.then((res) => setGroups(res.data));
  }, [setContacts, setGroups]);
};

export default useContact;
