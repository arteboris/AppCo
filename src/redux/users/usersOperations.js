import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersError,
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

export const example = () => {};
