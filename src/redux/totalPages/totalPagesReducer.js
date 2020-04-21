import * as usersType from '../users/usersActions';

const totalPagesReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case usersType.Type.FETCH_USERS_SUCCESS:
      return payload.totalPages;
    default:
      return state;
  }
};

export default totalPagesReducer;
