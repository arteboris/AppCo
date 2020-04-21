import { combineReducers } from 'redux';
import { Type } from './userIdActions';

const fullName = (state = '', { type, payload }) => {
  switch (type) {
    case Type.FETCH_USER_STATS_SUCCESS:
      return payload.fullName;
    default:
      return state;
  }
};

const stats = (state = [], { type, payload }) => {
  switch (type) {
    case Type.FETCH_USER_STATS_SUCCESS:
      return payload.data;
    default:
      return state;
  }
};

export default combineReducers({
  fullName,
  stats,
});
