import {
  changePageStart,
  changePageSuccess,
  changePageError,
} from './pageActions';
import { getUsersPaginateFromServer } from '../../services/api';

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

export const example = () => {};
