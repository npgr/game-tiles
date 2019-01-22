import { ADD_STATS } from '../../actions/stats';

const defaultState = [
  {
    user: 'Marco Polo',
    steps: 5
  },
  {
    user: 'Leonardo Da Vinci',
    steps: 4
  },
  {
    user: 'Donald Trump',
    steps: 3
  },
  {
    user: 'Pedro Sanchez',
    steps: 2
  }
];

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case ADD_STATS:
      return [...state, payload ].sort((a,b) => (a.steps < b.steps) ? 1 : ((b.steps < a.steps) ? -1 : 0));
    default:
      return state;
  }
};
