import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { BoredSlice } from "../features/Bored/BoredSlice";
import { CattoSlice } from "../features/Cattos/CattoSlice";
import { DoggoSlice } from "../features/Doggos/DoggoSlice";
import { JokeSlice } from "../features/Jokes/JokesSlice";

const store = configureStore({
  reducer: {
    JokeSlice: JokeSlice.reducer,
    BoredSlice: BoredSlice.reducer,
    DoggoSlice: DoggoSlice.reducer,
    CattoSlice: CattoSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
