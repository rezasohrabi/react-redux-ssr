import { all, call, put, takeLatest } from 'redux-saga/effects';
import { setTodos } from './todos.actions';
import { handleFetchTodos } from './todos.helpers';
import todosTypes from './todos.types';

export function* fetchTodos() {
  try {
    const fetchedTodos = yield handleFetchTodos();
    yield put(setTodos(fetchedTodos));
  } catch (error) {
    console.error(error);
  }
}

export function* onFetchTodosStart() {
  yield takeLatest(todosTypes.Fetch_TODOS_START, fetchTodos);
}

export default function* todosSagas() {
  yield all([call(onFetchTodosStart)]);
}
