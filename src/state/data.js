import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState = {
  msg: null,
  alarm: null,
  dateStart: null,
  dateEnd: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setMsg: (state, action) => {
      state.msg = action.payload;
    },
    setAlarm: (state, action) => {
      state.alarm = action.payload;
    },
    setDateStart: (state, action) => {
      state.dateStart = action.payload;
    },
    setDateEnd: (state, action) => {
      state.dateEnd = action.payload;
    },
  },
});

export const { setMsg, setAlarm, setDateEnd, setDateStart } = dataSlice.actions;

export const dataActions = {
  setMsg,
  setAlarm,
  setDateStart,
  setDateEnd
};

export default dataSlice.reducer;

export const dataSelectors = {
  msg: (state) => _.get(state, "data.msg", ""),
  alarm: (state) => _.get(state, "data.alarm", ""),
  dateStart: (state) => _.get(state, "data.dateStart", ""),
  dateEnd: (state) => _.get(state, "data.dateEnd", ""),
};
