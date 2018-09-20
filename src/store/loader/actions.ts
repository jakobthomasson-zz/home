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

import { createPayloadAction } from 'src/helpers/redux';

// Action Type Constants
export const MODIFY = 'COUNTER/MODIFY';
export const MODIFY_SUCCESS = 'COUNTER/MODIFY_SUCCESS';
export const MODIFY_ERROR = 'COUNTER/MODIFY_ERROR';

// Action type constant, typeof treats MODIFY as a type which is necessary for typed actions in reducer.
export type ModifyCounterAction = I.PayloadAction<typeof MODIFY, Payloads.Counter>;
export type ModifyCounterSuccessAction = I.PayloadAction<typeof MODIFY_SUCCESS, number>;
export type ModifyCounterErrorAction = I.PayloadAction<typeof MODIFY_ERROR, Error>;

export const modifyCounter = (payload: Payloads.Counter): ModifyCounterAction => {
  return createPayloadAction(MODIFY, payload);
};

export const modifyCounterSuccess = (payload: number): ModifyCounterSuccessAction => {
  return createPayloadAction(MODIFY_SUCCESS, payload);
};

export const modifyCounterError = (payload: Error): ModifyCounterErrorAction => {
  return createPayloadAction(MODIFY_ERROR, payload);
};

export type Actions = ModifyCounterAction | ModifyCounterSuccessAction | ModifyCounterErrorAction;
