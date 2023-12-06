import { create } from "zustand";
import Contact from "./Entites/Contact";

interface ContactStore {
  contacts: Contact[];
  setContacts: (contacts: Contact[]) => void;
  deleteContact: (id: number) => void;
}

const useContactsStore = create<ContactStore>((set) => ({
  contacts: [],
  setContacts: (contacts) => set({ contacts }),
  deleteContact: (id) =>
    set((store) => ({
      contacts: store.contacts.filter((contact) => contact.id !== id),
    })),
}));

export default useContactsStore;
