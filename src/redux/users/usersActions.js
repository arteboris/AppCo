export const Type = {
  FETCH_USERS_START: 'FETCH_USERS_START',
  FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR: 'FETCH_USERS_ERROR',
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
