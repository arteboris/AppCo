export const Type = {
  CHANGE_PAGE_START: 'CHANGE_PAGE_START',
  CHANGE_PAGE_SUCCESS: 'CHANGE_PAGE_SUCCESS',
  CHANGE_PAGE_ERROR: 'CHANGE_PAGE_ERROR',
};

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
