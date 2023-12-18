import { useQuery } from "@tanstack/react-query";
import Contact from "../Entites/Contact";
import contactService from "../Services/contactService";

const useContact = () => {
  const fetchContacts = () => {
    return contactService.getAll().then((res) => res.data);
  };

  return useQuery<Contact[], Error>({
    queryKey: ["contacts"],
    queryFn: fetchContacts,
  });
};

export default useContact;
