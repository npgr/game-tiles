import { ADD_STATS } from '../../actions/stats';

const defaultState = [
  {
    user: 'user 1',
    steps: 5
  },
  {
    user: 'user 2',
    steps: 4
  }
];

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case ADD_STATS:
      return [...state, payload ]
    default:
      return state;
  }
};
