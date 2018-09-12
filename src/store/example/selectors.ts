import { createSelector } from 'reselect';
// import { State } from './reducer';
import { IState } from 'src/store/reducers';

const getAnimeDomain = () => (state: IState) => state.animeDomain;

const selectTopAnime = () => createSelector(
  getAnimeDomain(),
  animeDomain => animeDomain.animeList,
);

const selectIsLoading = () => createSelector(
  getAnimeDomain(),
  animeDomain => animeDomain.isLoading,
);

const selectIsFetched = () => createSelector(
  getAnimeDomain(),
  animeDomain => animeDomain.isFetched,
);

export {
  selectTopAnime,
  selectIsLoading,
  selectIsFetched,
};

export default getAnimeDomain;
