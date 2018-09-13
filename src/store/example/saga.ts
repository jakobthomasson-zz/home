import { AxiosResponse } from 'axios';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { actionTypes as at } from './constants';
// import { TopAnime } from './reducer';
import { get } from './service';

// https://jikan.docs.apiary.io/#reference/0/top/top-request-example+schema?console=1
function* fetchTest() {
  const test: AxiosResponse<{ top: any }> = yield call(get, '/api/library/books');
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
