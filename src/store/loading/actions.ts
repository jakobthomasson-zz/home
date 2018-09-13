import { actionTypes as at } from './constants';
// import { Loader } from './reducer';

export const startLoading = () => {
  return {
    type: at.LOADING_START,
  };
};

// export const fetchSuccess = (result: TopAnime[]) => {
//   return {
//     type: at.ANIME_TOP_FETCH_SUCCESS,
//     payload: result,
//   };
// };

// export const fetchError = (error: Error) => {
//   return {
//     type: at.ANIME_TOP_FETCH_ERROR,
//     payload: error,
//   };
// };
