import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import usersReducer from './users/usersReducer';
import userIdReducer from './userId/userIdReducer';
import loaderReducer from './loader/loaderReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  user: userIdReducer,
  isLoading: loaderReducer,
});

const enhancer = applyMiddleware(ReduxThunk);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
