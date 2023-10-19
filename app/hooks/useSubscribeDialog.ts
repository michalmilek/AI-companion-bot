import { create } from "zustand";

interface State {
  isSubscribeDialogOpen: boolean;
  setIsSubscribeDialogOpen: (isOpen: boolean) => void;
}

const useSubscribeDialog = create<State>((set) => ({
  isSubscribeDialogOpen: false,
  setIsSubscribeDialogOpen: (isOpen) => set({ isSubscribeDialogOpen: isOpen }),
}));

export default useSubscribeDialog;
