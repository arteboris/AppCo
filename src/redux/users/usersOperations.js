import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersError,
  changePageStart,
  changePageSuccess,
  changePageError,
} from './usersActions';
import { getUsersPaginateFromServer } from '../../services/api';

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
  const { limit } = getState();
  dispatch(changePageStart());
  getUsersPaginateFromServer(page, limit)
    .then(response => {
      dispatch(changePageSuccess(response.data));
    })
    .catch(error => {
      dispatch(changePageError(error));
    });
};
