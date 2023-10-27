import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

// import storage from 'redux-persist/lib/storage';
import storage from './storage';

import blog from './blog/reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const combineReducer = combineReducers({
  blog,
});

const persistedReducer = persistReducer(persistConfig, combineReducer);

export default persistedReducer;
