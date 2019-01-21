import { SET_USER } from '../../actions/user';

const defaultState = {
  user: ''
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload
      };
    default:
      return state;
  }
};
