import { create } from "zustand";
import { Mail } from "../App";

interface InboxStore {
  isInboxActive: boolean;
  toggleInbox: () => void;
}

export const useInboxStore = create<InboxStore>((set) => ({
  isInboxActive: true,
  toggleInbox: () => set((state) => ({ isInboxActive: !state.isInboxActive })),
}));

interface EmailStore {
  lastEmailReceived: string | null;
  setLastEmailReceived: (emailId: string | null) => void;
  selectedEmail: Mail | null;
  setSelectedEmail: (mail: Mail) => void;
}

export const useEmailStore = create<EmailStore>((set) => ({
  selectedEmail: null,
  setSelectedEmail: (mail) => set(() => ({ selectedEmail: mail })),
  lastEmailReceived: null,
  setLastEmailReceived: (id) => set(() => ({ lastEmailReceived: id })),
}));
