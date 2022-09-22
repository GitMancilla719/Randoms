import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RandomCat } from "../../common/api/api-links";

interface ICatto {
  url: string;
}

interface IState {
  status: "idle" | "loading" | "success" | "failed";
  value: ICatto[];
}

const initialState: IState = {
  status: "idle",
  value: [],
};

export const getRandomCatto = createAsyncThunk("Cattos/getRandomCatto", async (_, thunkAPI) => {
  try {
    const response = await axios.get<[]>(RandomCat);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    } else {
      console.log("Unexpected error", error);
    }
  }
});

export const CattoSlice = createSlice({
  name: "Cattos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomCatto.pending, (state) => {
        state.status = "loading";
        state.value = [];
      })
      .addCase(getRandomCatto.fulfilled, (state, action) => {
        state.status = "success";
        state.value = action.payload as [];
      })
      .addCase(getRandomCatto.rejected, (state, action) => {
        state.status = "failed";
        state.value = action.payload as [];
      });
  },
});
