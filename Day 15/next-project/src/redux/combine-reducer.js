import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

// import storage from 'redux-persist/lib/storage';
import storage from './storage';

import blog from './blog/reducer';
import user from './user/reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const combineReducer = combineReducers({
  blog,
  user,
});

const persistedReducer = persistReducer(persistConfig, combineReducer);

export default persistedReducer;
