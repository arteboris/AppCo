import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersError,
  changePageStart,
  changePageSuccess,
  changePageError,
  sortUsersStart,
  sortUsersSuccess,
  sortUsersError,
} from './usersActions';
import {
  getUsersPaginateFromServer,
  getUsersSortFromServer,
} from '../../services/api';

export const getUsersPaginate = (page, limit) => dispatch => {
  dispatch(fetchUsersStart());
  getUsersPaginateFromServer(page, limit)
    .then(response => {
      dispatch(fetchUsersSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchUsersError(error));
    });
};

export const changePage = page => (dispatch, getState) => {
  const { limit } = getState().users;
  dispatch(changePageStart());
  getUsersPaginateFromServer(page, limit)
    .then(response => {
      dispatch(changePageSuccess(response.data));
    })
    .catch(error => {
      dispatch(changePageError(error));
    });
};

export const sortUsers = query => (dispatch, getState) => {
  const { limit } = getState().users;
  const page = 1;
  dispatch(sortUsersStart());
  getUsersSortFromServer(page, limit, query)
    .then(response => {
      dispatch(sortUsersSuccess(response.data));
    })
    .catch(error => {
      dispatch(sortUsersError(error));
    });
};
