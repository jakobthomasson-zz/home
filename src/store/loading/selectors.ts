import { createSelector } from 'reselect';
// import { State } from './reducer';
import { IState } from 'src/store/reducers';

const getLoadingDomain = () => (state: IState) => state.loadingDomain;

const selectLoaders = () => createSelector(
  getLoadingDomain(),
  animeDomain => animeDomain.loaders,
);

export {
  selectLoaders,
};

export default getLoadingDomain;
