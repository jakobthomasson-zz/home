import { createSelector } from 'reselect';
// import { State } from './reducer';
import { IState } from 'src/store/reducers';

const getLoaderDomain = () => (state: IState) => state.loaderDomain;

const selectLoaders = () => createSelector(
  getLoaderDomain(),
  loaderDomain => loaderDomain.loaders,
);

export {
  selectLoaders,
};

export default getLoaderDomain;
