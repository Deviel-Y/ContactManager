import { create } from "zustand";
import Contact from "./Entites/Contact";
import { Group } from "./Entites/Group";

interface Store {
  contacts: Contact[];
  setContacts: (contacts: Contact[]) => void;
  deleteContact: (id: number) => void;

  groups: Group[];
  setGroups: (group: Group[]) => void;
}

const useStore = create<Store>((set) => ({
  contacts: [],
  setContacts: (contacts) => set({ contacts }),
  deleteContact: (id) =>
    set((store) => ({
      contacts: store.contacts.filter((contact) => contact.id !== id),
    })),

  groups: [],
  setGroups: (groups) => set({ groups }),
}));

export default useStore;
