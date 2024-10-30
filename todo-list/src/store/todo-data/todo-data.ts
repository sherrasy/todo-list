import { TodosState } from "@/types/state.type";
import { REDUCER_NAME } from "@/utils/constant";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TodosState = {
  todos: null,
  isLoading: false,
  isPosting: false,
  hasError: false,
  hasPostingError: false,
};

export const todoData = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {    },
});

