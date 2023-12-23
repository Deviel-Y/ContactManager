import { useQuery } from "@tanstack/react-query";
import Contact from "../Entites/Contact";
import contactService from "../Services/contactService";
import { CONTACT_QUERY_KEY_CACHE } from "../constants";

const useContact = () => {
  const fetchContacts = () => {
    return contactService.getAll().then((res) => res.data);
  };

  return useQuery<Contact[], Error>({
    queryKey: CONTACT_QUERY_KEY_CACHE,
    queryFn: fetchContacts,
  });
};

export default useContact;
