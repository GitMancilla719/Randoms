import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MemeTemplates } from "../../common/api/api-links";

interface memes {
  id: number;
  name: string;
  url: string;
}

interface IState {
  status: "idle" | "loading" | "success" | "failed";
  value: { data: { memes: memes[] | null } }; // your call on value type
}

const initialState: IState = {
  status: "idle",
  value: { data: { memes: [] } },
};

export const getMemeTemplates = createAsyncThunk("Memer/getMemeTemplates", async (_, thunkAPI) => {
  try {
    const response = await axios.get<{}>(MemeTemplates);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    } else {
      return { type: "Unexpected error", error };
    }
  }
});

export const MemerSlice = createSlice({
  name: "Memer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMemeTemplates.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMemeTemplates.fulfilled, (state, action) => {
        state.status = "success";
        state.value = action.payload as { data: { memes: [] } };
      })
      .addCase(getMemeTemplates.rejected, (state, action) => {
        state.status = "failed";
        state.value = action.payload as { data: { memes: [] } };
      });
  },
});
