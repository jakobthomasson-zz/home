
import * as actions from './actions';

export interface State {
  counter: number;
  isCounting: boolean;
}
const initialState: Readonly<State> = {
  counter: 0,
  isCounting: false,
};

export default (state: Readonly<State> = initialState, action: actions.Actions): Readonly<State> => {
  switch (action.type) {
    case actions.MODIFY:
      return {
        ...state,
        isCounting: true,
      };
    case actions.MODIFY_SUCCESS:
      let { counter } = state;
      counter = counter + (action.payload);
      return {
        ...state,
        counter,
        isCounting: false,
      };
    case actions.MODIFY_ERROR:
      return {
        ...state,
        isCounting: false,
      };

    default:
      return state;
  }
};
