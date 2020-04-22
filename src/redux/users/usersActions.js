export const Type = {
  FETCH_USERS_START: 'FETCH_USERS_START',
  FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR: 'FETCH_USERS_ERROR',
  CHANGE_PAGE_START: 'CHANGE_PAGE_START',
  CHANGE_PAGE_SUCCESS: 'CHANGE_PAGE_SUCCESS',
  CHANGE_PAGE_ERROR: 'CHANGE_PAGE_ERROR',
};

export const fetchUsersStart = () => ({
  type: 'FETCH_USERS_START',
});

export const fetchUsersSuccess = data => ({
  type: 'FETCH_USERS_SUCCESS',
  payload: data,
});

export const fetchUsersError = error => ({
  type: 'FETCH_USERS_ERROR',
  payload: error,
});

export const changePageStart = () => ({
  type: 'CHANGE_PAGE_START',
});

export const changePageSuccess = data => ({
  type: 'CHANGE_PAGE_SUCCESS',
  payload: data,
});

export const changePageError = error => ({
  type: 'CHANGE_PAGE_ERROR',
  payload: error,
});
