import { createReducer } from "@reduxjs/toolkit";
import { TOGGLEFOCUS, ADDPOINT, ADDUPGRADE } from "./actions";

const initialState = {
  focusState: true,
  points: 0,
  upgrades: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  },
};

const gameReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(TOGGLEFOCUS, (state) => ({ ...state, focusState: false }))
    .addCase(ADDPOINT, (state, action) => ({
      ...state,
      points: state.points + action.payload,
    }))
    .addCase(ADDUPGRADE, (state, action) => ({
      ...state,
      points: state.points - action.payload.cost,
      upgrades: {
        ...state.upgrades,
        [action.payload.id]: state.upgrades[action.payload.id] + 1,
      },
    }));
});

export default gameReducer;
