import { useQuery } from "@tanstack/react-query";
import Contact from "../Entites/Contact";
import contactService from "../Services/contactService";

const useContact = () => {
  const fetchContacts = () => {
    return contactService.getAll<Contact[]>().then((res) => res.data);
  };

  return useQuery<Contact[], Error>({
    queryKey: ["contacts"],
    queryFn: fetchContacts,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export default useContact;
