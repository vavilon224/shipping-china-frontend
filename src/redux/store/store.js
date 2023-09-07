import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {createReducerManager} from './reducerManager';
import userSlice from '../slices/userSlice';
import {REDUX_LONG_BLOB_HANDLER} from './types';

export function createReduxStore(initialState, asyncReducers) {
  const rootReducers = {
    ...asyncReducers,
    users: userSlice,
  };

  const reducerManager = createReducerManager(rootReducers);

  const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
  });

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: {
      actionSanitizer: (action) => (REDUX_LONG_BLOB_HANDLER(action.type) && action.payload ? { ...action, payload: '<<LONG_BLOB>>' } : action),
      stateSanitizer: (state) => (state.data ? { ...state, data: '<<LONG_BLOB>>' } : state),
    },
    preloadedState: initialState,
    middleware,
  });

  store.reducerManager = reducerManager;

  return store;
}
