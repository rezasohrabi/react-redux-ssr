import { combineReducers } from 'redux';
import todosReducer from './todos/todos.reducer';
import imagesReducer from './images/images.reducer';

const rootReducer = combineReducers({
  todosData: todosReducer,
  imagesData: imagesReducer,
});

export default rootReducer;
