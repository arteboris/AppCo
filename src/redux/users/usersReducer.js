import { Type } from './usersActions';

const usersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.FETCH_USERS_SUCCESS:
      return payload.data;
    default:
      return state;
  }
};

export default usersReducer;
