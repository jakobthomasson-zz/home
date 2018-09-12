import { combineReducers, Reducer } from 'redux';

// import usersReducer from '../containers/Users/reducer';
// usersDomain: any;
import exampleReducer, { State as AnimeState } from './example/reducer';

export interface IState {
  animeDomain: AnimeState;
}

export const state: Reducer<IState> = combineReducers({
  animeDomain: exampleReducer,
});
