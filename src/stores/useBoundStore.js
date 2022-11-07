import create from "zustand";
import { createBearSlice } from "./bearSlice";
import { createFishSlice } from "./fishSlice";
import { createThunk } from "./createThunk";

export const useBoundStore = create(
  (...a) => ({
    ...createBearSlice(...a),
    ...createFishSlice(...a),
    ...createThunk(...a)
  })
);
