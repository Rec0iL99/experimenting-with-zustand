export const createPersonSlice = (set) => ({
    customerList: [],
    customList: [],
    addCustomerList: (newCustomerList) => set((state) => ({customerList: newCustomerList})),
    addCustomList: (newCustomList) => set((state) => ({customList: newCustomList}))
  });
  