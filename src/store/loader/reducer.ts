
import { actionTypes as at } from './constants';

export interface State {
  readonly loaders: ReadonlyArray<I.Loader>;
}

const initialState: State = {
  loaders: [],
};

export default (state = initialState, action: I.Action<any>) => {

  switch (action.type) {
    case at.LOADER_START:
      const isComputable: boolean = (action as I.Action<boolean>).payload || false;
      const loaders = [...state.loaders];
      const id: number = loaders.length + 1;

      if (isComputable) {
        loaders.push({
          id,
          isComputable,
          progress: [0],
          isFinished: false,
        });
      } else {
        loaders.push({
          id,
          isComputable,
          progress: [0, 1],
          isFinished: false,
        });
      }
      return { ...state, loaders };

    case at.LOADER_UPDATE:
      return state;

    case at.LOADER_STOP:
      return state;
    default:
      return state;
  }
};
