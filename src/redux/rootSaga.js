import { all, call } from 'redux-saga/effects';
import todosSagas from './todos/todos.sagas';

export default function* rootSaga() {
  yield all([call(todosSagas)]);
}
