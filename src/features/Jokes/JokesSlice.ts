import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RandomJokes } from "../../common/api/api-links";

interface IState {
  status: "idle" | "loading" | "success" | "failed";
  value: {
    setup?: string | null;
    punchline?: string | null;
  };
}

const initialState: IState = {
  status: "idle",
  value: {
    setup: null,
    punchline: null,
  },
};

export const getRandomJokes = createAsyncThunk("Jokes/getRandomJokes", async (_, thunkAPI) => {
  try {
    const response = await axios.get<{}>(RandomJokes);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    } else {
      return { type: "Unexpected error", error };
    }
  }
});

export const JokeSlice = createSlice({
  name: "Jokes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomJokes.pending, (state) => {
        state.status = "loading";
        state.value = {};
      })
      .addCase(getRandomJokes.fulfilled, (state, action) => {
        state.status = "success";
        state.value = action.payload as object;
      })
      .addCase(getRandomJokes.rejected, (state, action) => {
        state.status = "failed";
        state.value = action.payload!;
      });
  },
});
