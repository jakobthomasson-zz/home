import { actionTypes as at } from './constants';
import { TopAnime } from './reducer';

export const fetch = () => {
  return {
    type: at.ANIME_TOP_FETCH,
  };
};

export const fetchSuccess = (result: TopAnime[]) => {
  return {
    type: at.ANIME_TOP_FETCH_SUCCESS,
    payload: result,
  };
};

export const fetchError = (error: Error) => {
  return {
    type: at.ANIME_TOP_FETCH_ERROR,
    payload: error,
  };
};
