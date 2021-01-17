import { combineReducers } from "redux";

import {
  LOADING_START,
  LOADING_STOP
} from "./AppActions";

const INITIAL_STATE = {
  loading: false,
  lessons: [],
  alarms: [],
  ready: null
};

const appReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LOADING_STOP:
      return { ...state, loading: false };
    case LOADING_START:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default combineReducers({
  app: appReducer,
});