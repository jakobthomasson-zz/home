import { combineReducers, Reducer } from 'redux';

// import usersReducer from '../containers/Users/reducer';
// usersDomain: any;
import exampleReducer, { State as AnimeState } from './example/reducer';
import loaderReducer, { State as LoaderState } from './loader/reducer';

export interface IState {
  animeDomain: AnimeState;
  loaderDomain: LoaderState;
}

export const state: Reducer<IState> = combineReducers({
  animeDomain: exampleReducer,
  loaderDomain: loaderReducer,
});
