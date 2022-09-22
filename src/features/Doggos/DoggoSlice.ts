import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RandomDog } from "../../common/api/api-links";

interface IState {
  status: "idle" | "loading" | "success" | "failed";
  value: { message?: string | null };
}

const initialState: IState = {
  status: "idle",
  value: {
    message: null,
  },
};

export const getRandomDoggo = createAsyncThunk("Doggos/getRandomDoggo", async (_, thunkAPI) => {
  try {
    const response = await axios.get<{}>(RandomDog);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    } else {
      return { type: "Unexpected error", error };
    }
  }
});

export const DoggoSlice = createSlice({
  name: "Doggos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomDoggo.pending, (state) => {
        state.status = "loading";
        state.value = {};
      })
      .addCase(getRandomDoggo.fulfilled, (state, action) => {
        state.status = "success";
        state.value = action.payload as object;
      })
      .addCase(getRandomDoggo.rejected, (state, action) => {
        state.status = "failed";
        state.value = action.payload as object;
      });
  },
});
