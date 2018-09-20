// import { actionTypes as at } from './constants';
import { ActionCreator } from 'redux';

// Action Types
export const MODIFY = 'COUNTER/MODIFY';
export const MODIFY_SUCCESS = 'COUNTER/MODIFY_SUCCESS';
export const MODIFY_ERROR = 'COUNTER/MODIFY_ERROR';

// export const DECREMENT  = '[Counter] Decrement';
// export const RESET      = '[Counter] Reset';

export const modifyCounter = (counter: Payloads.Counter): I.Action<Payloads.Counter> => {
  return {
    type: MODIFY,
    payload: counter,
  };
};

export const modifyCounterSuccess: ActionCreator<ModifyCounterSuccessAction> = (modifyWith: number) => {
  return {
    type: MODIFY_SUCCESS,
    payload: modifyWith,
  };
};

export const modifyCounterError: ActionCreator<ModifyCounterErrorAction> = (error: Error) => {
  return {
    type: MODIFY_ERROR,
    payload: error,
  };
};

export class ModifyCounterAction implements I.Action<Payloads.Counter> {
  readonly type = MODIFY;
  public payload: Payloads.Counter;
  constructor(payload: Payloads.Counter) {
    this.payload = payload;
  }
}

export class ModifyCounterSuccessAction implements I.Action<number> {
  readonly type = MODIFY_SUCCESS;
  public payload: number;
  constructor(payload: number) {
    this.payload = payload;
  }
}

export class ModifyCounterErrorAction implements I.Action<Error> {
  readonly type = MODIFY_ERROR;
  public payload: Error;

  constructor(payload: Error) {
    this.payload = payload;
  }
}

export type All = ModifyCounterAction | ModifyCounterSuccessAction | ModifyCounterErrorAction;
