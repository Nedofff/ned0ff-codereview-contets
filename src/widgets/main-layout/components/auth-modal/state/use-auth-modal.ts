import { create } from "zustand";
type AuthState = {
  isOpen: boolean;
  step: "login" | "register" | "success" | "thanks";
  open: (step: AuthState["step"]) => void;
  close: () => void;
  setStep: (step: AuthState["step"]) => void;
};
export const useAuthModal = create<AuthState>((set) => ({
  isOpen: false,
  step: "login",
  open: (step: AuthState["step"]) => set({ isOpen: true, step }),
  close: () => set({ isOpen: false, step: "login" }),
  setStep: (step: AuthState["step"]) => set({ step }),
}));
export const openAuthModal = useAuthModal.getState().open;
