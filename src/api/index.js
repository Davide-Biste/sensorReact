import axios from "axios";
import { store } from "../state";
import { dataActions } from "../state/data.js";

export const getData = async (name, start, end) => {
  try {
    const startDate = new Date(start);
    const endDate = new Date(end);
    if(start !== undefined && end !== undefined){
      const { data: res } = await axios.get(`/datalog/${name}/startDate/${startDate.getTime()}/endDate/${endDate.getTime()}`);
      store.dispatch(dataActions.setMsg(res));
      return res;
    }
    else {
      const { data: res } = await axios.get(`/datalog/${name}`);
      store.dispatch(dataActions.setMsg(res));
      return res;
    }
  } catch (e) {
    store.dispatch(dataActions.setMsg([]));
    console.log({ errorGetMessage: e });
    return [];
  }
};

export const getAlarm = async (name) => {
  try {
    const { data: res } = await axios.get(`/alarm/${name}`);
    store.dispatch(dataActions.setAlarm(res));
    return res;
  } catch (e) {
    store.dispatch(dataActions.setAlarm([]));
    console.log({ errorGetMessage: e });
    return [];
  }
};
