import { useEffect } from "react";
import Contact from "../Entites/Contact";
import contactService from "../Services/contactService";
import useStore from "../Store";

const useContact = () => {
  const setContacts = useStore((s) => s.setContacts);

  useEffect(() => {
    const { cancel, request } = contactService.getAll<Contact[]>();

    request.then((res) => setContacts(res.data));

    return () => cancel();
  }, [setContacts]);
};

export default useContact;
