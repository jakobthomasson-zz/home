import { fetchTestWatcher } from 'src/store/example/saga';
import { modifyCounterWatcher } from 'src/store/tutorial/saga';

export default function* rootSaga() {
  yield [
    fetchTestWatcher(),
    modifyCounterWatcher(),
  ];
}
