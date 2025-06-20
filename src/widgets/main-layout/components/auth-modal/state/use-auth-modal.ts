import { create } from "zustand";

type AuthState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useAuthModal = create<AuthState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export const openAuthModal = useAuthModal.getState().open;
