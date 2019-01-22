import { SET_USER, SET_STEP } from '../../actions/user';

const defaultState = {
  user: '',
  steps: 1
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
        steps: 1
      };
    case SET_STEP:
      return {
        ...state,
        steps: payload
      };
    default:
      return state;
  }
};
