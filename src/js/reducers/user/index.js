import { SET_USER, SET_STEP } from '../../actions/user';

const defaultState = {
  user: '',
  step: 1
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload
      };
    case SET_STEP:
      return {
        ...state,
        step: payload
      };
    default:
      return state;
  }
};
