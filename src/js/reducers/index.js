import { combineReducers } from 'redux'
import notifications from './notifications'
import user from './user'
import stats from './stats'

export default combineReducers({
  notifications,
  user,
  stats
});
