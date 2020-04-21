import { Type } from './usersActions';
import * as pageActions from '../page/pageActions';

const usersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.FETCH_USERS_SUCCESS:
      return payload.data;
    case pageActions.Type.CHANGE_PAGE_SUCCESS:
      return payload.data;
    default:
      return state;
  }
};

export default usersReducer;
