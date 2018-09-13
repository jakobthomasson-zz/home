import { combineReducers, Reducer } from 'redux';

// import usersReducer from '../containers/Users/reducer';
// usersDomain: any;
import exampleReducer, { State as AnimeState } from './example/reducer';
import loadingReducer, { State as LoadingState } from './loading/reducer';

export interface IState {
  animeDomain: AnimeState;
  loadingDomain: LoadingState;
}

export const state: Reducer<IState> = combineReducers({
  animeDomain: exampleReducer,
  loadingDomain: loadingReducer,
});
