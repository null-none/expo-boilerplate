
export const LOADING_START = "LOADING_STAR";
export const LOADING_STOP = "LOADING_STOP";

export const loadingStart = () => ({
  type: LOADING_START,
});

export const loadingStop = () => ({
  type: LOADING_STOP,
});