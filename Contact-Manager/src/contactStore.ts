import { create } from "zustand";
import Contact from "./Entites/Contact";
import { Group } from "./Entites/Group";

interface ContactStore {
  contacts: Contact[];
  setContacts: (contacts: Contact[]) => void;
  deleteContact: (id: number) => void;

  groups: Group[];
  setGroups: (group: Group[]) => void;
}

const useContactsStore = create<ContactStore>((set) => ({
  contacts: [],
  setContacts: (contacts) => set({ contacts }),
  deleteContact: (id) =>
    set((store) => ({
      contacts: store.contacts.filter((contact) => contact.id !== id),
    })),

  groups: [],
  setGroups: (groups) => set({ groups }),
}));

export default useContactsStore;
