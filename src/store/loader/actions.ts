import { actionTypes as at } from './constants';
// import { Loader } from './reducer';

export const startLoader = (isComputable: boolean): I.Action<boolean> => {
  return {
    type: at.LOADER_START,
    payload: isComputable,
  };
};

export const updateLoader = (loader: I.Loader): I.Action<I.Loader> => {
  return {
    type: at.LOADER_UPDATE,
    payload: loader,
  };
};

export const stopLoader = (loader: I.Loader): I.Action<I.Loader> => {
  return {
    type: at.LOADER_STOP,
    payload: loader,
  };
};
