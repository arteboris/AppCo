import { combineReducers } from 'redux';
import { Type } from './usersActions';

const page = (state = 1, { type, payload }) => {
  switch (type) {
    case Type.CHANGE_PAGE_SUCCESS:
    case Type.SORT_USERS_SUCCESS:
    case Type.CHANGE_LIMIT_SUCCESS:
      return payload.page;
    default:
      return state;
  }
};

const limit = (state = 50, { type, payload }) => {
  switch (type) {
    case Type.CHANGE_LIMIT_SUCCESS:
      return payload.limit;
    default:
      return state;
  }
};

const totalPages = (state = 0, { type, payload }) => {
  switch (type) {
    case Type.FETCH_USERS_SUCCESS:
    case Type.CHANGE_LIMIT_SUCCESS:
      return payload.totalPages;
    default:
      return state;
  }
};

const data = (state = [], { type, payload }) => {
  switch (type) {
    case Type.FETCH_USERS_SUCCESS:
    case Type.SORT_USERS_SUCCESS:
    case Type.CHANGE_PAGE_SUCCESS:
    case Type.CHANGE_LIMIT_SUCCESS:
      return payload.data;
    default:
      return state;
  }
};

const sort = (state = '', { type, payload }) => {
  switch (type) {
    case Type.SORT_USERS_SUCCESS:
      return payload.sort;
    case Type.CHANGE_LIMIT_SUCCESS:
      return '';
    default:
      return state;
  }
};

export default combineReducers({
  page,
  limit,
  totalPages,
  sort,
  data,
});
