import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';

import {combineReducers} from 'redux';

const appReducer = combineReducers({
  reducers,
});

const sagaMiddleware = createSagaMiddleware();

const initialState = {
  gists: undefined
};

const store = createStore(
  appReducer,
  initialState,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(sagas);

// Exports
export { store };
