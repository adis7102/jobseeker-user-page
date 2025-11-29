import { create } from "zustand";
import { User } from '@/types/home'

interface UserStore {
  userData: User | null;
  // loading: boolean;
  alert: {
    status: number | null
    text: string
  },
  setAlert: ({
    status,
    text
  }: {
    status: number | null
    text: string
  }) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userData: null,
  // loading: false,
  alert: {
    status: null,
    text: ''
  },
  setAlert: (message) => set(() => ({
    alert: message
  }))
}))