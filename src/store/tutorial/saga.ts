import { all, put, takeEvery, call } from 'redux-saga/effects';
import * as actions from './actions';

import delay from 'delay';
// import { TopAnime } from './reducer';
// import { get } from './service';

// https://jikan.docs.apiary.io/#reference/0/top/top-request-example+schema?console=1
function* modifyCounterSaga(action: actions.ModifyCounterAction) {
  try {
    yield call(() => delay(action.payload.timeout));
    const successAction: actions.ModifyCounterSuccessAction = { type: actions.MODIFY_SUCCESS, payload: action.payload.modifyBy };
    yield put(successAction);

  } catch (error) {
    const errorAction: actions.ModifyCounterErrorAction = { type: actions.MODIFY_ERROR, payload: error };

    yield put(errorAction);
  }
}

export function* modifyCounterWatcher() {
  yield takeEvery(actions.MODIFY, modifyCounterSaga);
}

export default function* rootSaga() {
  yield all([
    modifyCounterWatcher(),
  ]);
}
