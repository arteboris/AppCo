import { Type } from './loaderActions';
import * as usersActions from '../users/usersActions';
import * as userIdActions from '../userId/userIdActions';

const loaderReducer = (state = false, { type }) => {
  switch (type) {
    case Type.LOADER_ON:
    case usersActions.Type.FETCH_USERS_START:
    case usersActions.Type.CHANGE_PAGE_START:
    case usersActions.Type.SORT_USERS_START:
    case usersActions.Type.CHANGE_LIMIT_START:
    case userIdActions.Type.FETCH_USER_STATS_START:
      return true;
    case Type.LOADER_OFF:
    case usersActions.Type.FETCH_USERS_SUCCESS:
    case usersActions.Type.FETCH_USERS_ERROR:
    case usersActions.Type.CHANGE_PAGE_SUCCESS:
    case usersActions.Type.CHANGE_PAGE_ERROR:
    case usersActions.Type.SORT_USERS_SUCCESS:
    case usersActions.Type.SORT_USERS_ERROR:
    case usersActions.Type.CHANGE_LIMIT_SUCCESS:
    case usersActions.Type.CHANGE_LIMIT_ERROR:
    case userIdActions.Type.FETCH_USER_STATS_SUCCESS:
    case userIdActions.Type.FETCH_USER_STATS_ERROR:
      return false;
    default:
      return state;
  }
};

export default loaderReducer;
