import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RandomActivity } from "../../common/api/api-links";

interface IState {
  status: "idle" | "loading" | "success" | "failed";
  value: {
    activity?: string | null;
    type?: string | null;
  };
}

const initialState: IState = {
  status: "idle",
  value: {
    activity: null,
    type: null,
  },
};

export const getRandomActivity = createAsyncThunk(
  "Bored/getRandomActivity",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<{}>(RandomActivity);
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      } else {
        console.log("Unexpected error", error);
      }
    }
  }
);

export const BoredSlice = createSlice({
  name: "Bored",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomActivity.pending, (state) => {
        state.status = "loading";
        state.value = {};
      })
      .addCase(getRandomActivity.fulfilled, (state, action) => {
        state.status = "success";
        state.value = action.payload as object;
      })
      .addCase(getRandomActivity.rejected, (state, action) => {
        state.status = "failed";
        state.value = action.payload!;
      });
  },
});
