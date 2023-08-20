// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

interface iExample {
  test: boolean;  
}

export const exampleInitialState = {
  test : true
}

export interface StateProps {
  example: iExample;
}

const initialState: StateProps = {
  example: exampleInitialState,
};

export const State = createSlice({
  name: "state",
  initialState,
  reducers: {
    setExample(state, action) {
      state.example = action.payload
    },
    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state: any, action: any): any => {
        return {
          ...state,
          ...action.payload.state,
        };
      },
    },
  },
});

export const { setExample } = State.actions;
 
export const getExemple = (state: AppState) => state.state.example; 
export default State.reducer;