import { createSelector } from 'reselect';
// import { State } from './reducer';
import { IState } from 'src/store/reducers';

const getCounterDomain = () => (state: IState) => state.counterDomain;

const selectCounter = () => createSelector(
  getCounterDomain(),
  counterDomain => counterDomain.counter,
);

const selectIsCounting = () => createSelector(
  getCounterDomain(),
  animeDomain => animeDomain.isCounting,
);

export {
  selectCounter,
  selectIsCounting,
};

export default getCounterDomain;
