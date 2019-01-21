export const SET_USER = 'SET_USER'
export const SET_STEP = 'SET_STEP'

export const setUser = (user) =>({
  type: SET_USER,
  payload: user
});

export const setStep = (step) =>({
  type: SET_STEP,
  payload: step
});
