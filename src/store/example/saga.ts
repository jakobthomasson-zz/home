import axios, { AxiosResponse } from 'axios';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { actionTypes as at } from './constants';
import { TopAnime } from './reducer';

function* fetchTest() {
  const test: AxiosResponse<{ top: TopAnime[] }> = yield call([axios, axios.get], 'https://api.jikan.moe/v3/top/anime/1/upcoming');
  yield put({ type: at.ANIME_TOP_FETCH_SUCCESS, payload: test.data.top });
}

export function* fetchTestWatcher() {
  yield takeEvery(at.ANIME_TOP_FETCH, fetchTest);
}

export default function* rootSaga() {
  yield all([
    fetchTestWatcher(),
  ]);
}
