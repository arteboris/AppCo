import {
  fetchUserStatsStart,
  fetchUserStatsSuccess,
  fetchUserStatsError,
} from './userIdActions';
import { getUserStatsFromServer } from '../../services/api';

export const userStats = (id, period) => dispatch => {
  dispatch(fetchUserStatsStart());
  getUserStatsFromServer(id, period)
    .then(response => {
      dispatch(fetchUserStatsSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchUserStatsError(error));
    });
};

export const example = () => {};
