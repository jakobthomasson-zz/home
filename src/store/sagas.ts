import { fetchTestWatcher } from 'src/store/example/saga';

export default function* rootSaga() {
  yield [
    fetchTestWatcher(),
  ];
}
