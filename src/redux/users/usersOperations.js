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
  changeLimitStart,
  changeLimitSuccess,
  changeLimitError,
} from './usersActions';
import {
  getUsersPaginateFromServer,
  getUsersSortFromServer,
} from '../../services/api';

export const getUsersPaginate = (page, limit) => (dispatch, getState) => {
  const { sort } = getState().users;

  if (sort.length > 0) {
    dispatch(fetchUsersStart());
    getUsersSortFromServer(page, limit, sort)
      .then(response => {
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchUsersError(error));
      });
  } else {
    dispatch(fetchUsersStart());
    getUsersPaginateFromServer(page, limit)
      .then(response => {
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchUsersError(error));
      });
  }
};

export const changePage = page => (dispatch, getState) => {
  const { limit, sort } = getState().users;
  if (sort.length > 0) {
    dispatch(changePageStart());
    getUsersSortFromServer(page, limit, sort)
      .then(response => {
        dispatch(changePageSuccess(response.data));
      })
      .catch(error => {
        dispatch(changePageError(error));
      });
  } else {
    dispatch(changePageStart());
    getUsersPaginateFromServer(page, limit)
      .then(response => {
        dispatch(changePageSuccess(response.data));
      })
      .catch(error => {
        dispatch(changePageError(error));
      });
  }
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

export const changeLimit = limit => dispatch => {
  const page = 1;
  dispatch(changeLimitStart());
  getUsersPaginateFromServer(page, limit)
    .then(response => {
      dispatch(changeLimitSuccess(response.data));
    })
    .catch(error => {
      dispatch(changeLimitError(error));
    });
};
