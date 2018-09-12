import { applyMiddleware, createStore, Store } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import { state } from './reducers';
import sagas from './sagas';

import createSagaMiddleware from 'redux-saga';
// import state from './state';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const enhancer = composeWithDevTools(
  applyMiddleware(sagaMiddleware),
);

const store: Store<any> = createStore(
  state,
  // initialState!,
  enhancer,

);

sagaMiddleware.run(sagas);

export default store;
