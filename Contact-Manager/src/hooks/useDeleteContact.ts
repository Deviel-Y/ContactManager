import { useMutation, useQueryClient } from "@tanstack/react-query";
import contactService from "../Services/contactService";
import { CONTACT_QUERY_KEY_CACHE } from "../constants";
import Contact from "../Entites/Contact";

const useDeleteContact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (contactId: number) => contactService.delete(contactId),

    onSuccess: (_savedContact, contactId) => {
      queryClient.setQueryData<Contact[]>(CONTACT_QUERY_KEY_CACHE, (contacts) =>
        contacts?.filter((contact) => contact.id !== contactId)
      );
    },
  });
};

export default useDeleteContact;
