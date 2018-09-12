
import { actionTypes as at } from './constants';

export interface TopAnime {
  mal_id: number;
  rank: number;
  title: string;
  url: string;
  image_url: string;
  type: string;
  episodes: any;
  start_date?: string;
  end_date?: string;
  members: number;
  score: number;
}

export interface State {
  readonly animeList: TopAnime[];
  isLoading: boolean;
  isFetched: boolean;
}
const initialState: State = {
  animeList: [],
  isLoading: false,
  isFetched: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case at.ANIME_TOP_FETCH:
      return {
        ...state,
        isLoading: true,
        isFetched: false,
      };
    case at.ANIME_TOP_FETCH_SUCCESS:
      return {
        animeList: action.payload,
        isLoading: false,
        isFetched: true,
      };
    case at.ANIME_TOP_FETCH_ERROR:
      return state;
    // .set('isLoading', false)
    // .set('isFetched', false)
    // .set('users', initialState.get('users'));
    default:
      return state;
  }
};
