import { useMutation, useQueryClient } from "@tanstack/react-query";
import Contact from "../Entites/Contact";
import contactService from "../Services/contactService";
import { useNavigate, useParams } from "react-router-dom";

interface ContactContext {
  backupContacts: Contact[];
}

const useEditContact = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const queryClient = useQueryClient();

  return useMutation<Contact, Error, Contact, ContactContext>({
    mutationFn: (contact: Contact) =>
      contactService.update(parseInt(id!), contact).then((res) => res.data),

    onSuccess: (savedContact) => {
      queryClient.setQueryData<Contact[]>(["contacts"], (previousContacts) => {
        return previousContacts?.map((contact) =>
          contact.id === parseInt(id!) ? savedContact : contact
        );
      });
      navigate("/");
    },

    onError: (error, _newContact, context) => {
      if (!context) return;

      console.error("Error adding contact:", error);

      queryClient.setQueryData<Contact[]>(["contacts"], context.backupContacts);
    },
  });
};

export default useEditContact;
