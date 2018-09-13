
import { actionTypes as at } from './constants';

export interface ILoader {
  readonly id: number;
  readonly progress: number[];
  readonly computable: boolean;
}

export interface State {
  readonly loaders: ReadonlyArray<ILoader>;
  // event: ProgressEvent;
  // isLoading: boolean;
  // isFetched: boolean;
}

const initialState: State = {
  loaders: [{
    id: 1,
    progress: [0, 1],
    computable: true,
  }],
};

export default (state = initialState, action: any) => {
  const loader: ILoader = action.payload;

  switch (action.type) {
    case at.LOADING_START:

      const loaders = [...state.loaders];
      const indexOfLoading = loaders.findIndex(l => l.id === loader.id);

      if (indexOfLoading !== -1) {
        loaders[indexOfLoading] = loader;
      } else {
        loaders.push(loader);
      }

      return { ...state, loaders };

    case at.LOADING_FINISHED:
      const id: number = action.payload;
      return state;
    default:
      return state;
  }
};
