import { createAction } from "@reduxjs/toolkit";

export const TOGGLEFOCUS = createAction("toggleFocus");

export const ADDPOINT = createAction("addPoint");

export const ADDUPGRADE = createAction("addUpgrade", (id, cost) => ({
  payload: {
    id,
    cost,
  },
}));
