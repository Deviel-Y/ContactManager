import { create } from "zustand";
import Contact from "./Entites/Contact";
import { Group } from "./Entites/Group";

interface ContactStore {
  contacts: Contact[];
  groups: Group[];
  setGroups: (group: Group[]) => void;
  setContacts: (contacts: Contact[]) => void;
  deleteContact: (id: number) => void;
}

const useContactsStore = create<ContactStore>((set) => ({
  contacts: [],
  groups: [],
  setGroups: (groups) => set({ groups }),
  setContacts: (contacts) => set({ contacts }),
  deleteContact: (id) =>
    set((store) => ({
      contacts: store.contacts.filter((contact) => contact.id !== id),
    })),
}));

export default useContactsStore;
