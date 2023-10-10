import { create } from "zustand";

interface State {
  isMobileMenuOpen: boolean;
}

const useStore = create<State>((set) => ({
  isMobileMenuOpen: false,
}));
