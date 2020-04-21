export const Type = {
  FETCH_USER_STATS_START: 'FETCH_USER_STATS_START',
  FETCH_USER_STATS_SUCCESS: 'FETCH_USER_STATS_SUCCESS',
  FETCH_USER_STATS_ERROR: 'FETCH_USER_STATS_ERROR',
};

export const fetchUserStatsStart = () => ({
  type: 'FETCH_USER_STATS_START',
});

export const fetchUserStatsSuccess = data => ({
  type: 'FETCH_USER_STATS_SUCCESS',
  payload: data,
});

export const fetchUserStatsError = error => ({
  type: 'FETCH_USER_STATS_ERROR',
  payload: error,
});
