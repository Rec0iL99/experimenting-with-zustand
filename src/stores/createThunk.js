import { createBearSlice } from './bearSlice'
import { createFishSlice } from './fishSlice'

export const createThunk = (set) => ({
  addBearAndFish: () => {
    createBearSlice(set).addBear();
    createFishSlice(set).addFish();
  }
})