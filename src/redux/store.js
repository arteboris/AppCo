import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import usersReducer from './users/usersReducer';
import pageReducer from './page/pageReducer';
import limitReducer from './limit/limitReducer';
import totalPagesReducer from './totalPages/totalPagesReducer';
import userIdReducer from './userId/userIdReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  page: pageReducer,
  limit: limitReducer,
  totalPages: totalPagesReducer,
  user: userIdReducer,
  // isLoading: loaderReducer,
});

const enhancer = applyMiddleware(ReduxThunk);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
