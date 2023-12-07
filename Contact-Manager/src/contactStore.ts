import { create } from "zustand";
import Contact from "./Entites/Contact";
import { Group } from "./Entites/Group";

interface ContactStore {
  contacts: Contact[];
  groups: Group[];
  setGroups: (group: Group[]) => void;
  setContacts: (contacts: Contact[]) => void;
}

const useContactsStore = create<ContactStore>((set) => ({
  groups: [],
  setGroups: (groups) => set({ groups }),

  contacts: [],
  setContacts: (contacts) => set({ contacts }),
}));

export default useContactsStore;
