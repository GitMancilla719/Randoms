import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// interface Todo {
//   id: number;
//   done: boolean;
//   text: string;
// }

// interface TodosSliceState {
//   todos: Todo[];
// }

// const initialState: TodosSliceState = {
//   todos: [],
// };

// Define a type for the slice state
interface CounterState {
  value: number;
}

interface ReturnData {
  name: string;
}

const fetchUserById = createAsyncThunk(
  "users/fetchById",
  async (userId: number): Promise<ReturnData> => {
    // code block
    return { name: "test" };
  }
);

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
