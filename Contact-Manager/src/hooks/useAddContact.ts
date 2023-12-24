import { useMutation, useQueryClient } from "@tanstack/react-query";
import contactService from "../Services/contactService";
import Contact from "../Entites/Contact";
import { CONTACT_QUERY_KEY_CACHE } from "../constants";

const useAddContact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (contact: Contact) =>
      contactService.create(contact).then((res) => res.data),

    onSuccess: (savedContacts) => {
      queryClient.setQueryData<Contact[]>(
        CONTACT_QUERY_KEY_CACHE,
        (contact) => [...(contact || []), savedContacts]
      );
    },

    onError: (error) => {
      console.error("Error adding contact:", error);
    },
  });
};

export default useAddContact;
