import { combineReducers } from 'redux';
import imagesReducer from './images/images.reducer';
import todosReducer from './todos/todos.reducer';

const rootReducer = combineReducers({
    todosData: todosReducer,
    imagesData: imagesReducer,
});

export default rootReducer;