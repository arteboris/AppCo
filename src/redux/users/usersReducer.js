import { combineReducers } from 'redux';
import { Type } from './usersActions';

const page = (state = 1, { type, payload }) => {
  switch (type) {
    case Type.CHANGE_PAGE_SUCCESS:
      return payload.page;
    default:
      return state;
  }
};

const limit = (state = 50, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

const totalPages = (state = 0, { type, payload }) => {
  switch (type) {
    case Type.FETCH_USERS_SUCCESS:
      return payload.totalPages;
    default:
      return state;
  }
};

const data = (state = [], { type, payload }) => {
  switch (type) {
    case Type.FETCH_USERS_SUCCESS:
      return payload.data;
    case Type.CHANGE_PAGE_SUCCESS:
      return payload.data;
    default:
      return state;
  }
};

export default combineReducers({
  page,
  limit,
  totalPages,
  data,
});
