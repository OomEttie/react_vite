import create from 'zustand';

export const useStore = create((set: any) => ({
  bears: 0,
  username: 'TEMP',
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  setUserName: (username: string) => set({ username }),
}));
