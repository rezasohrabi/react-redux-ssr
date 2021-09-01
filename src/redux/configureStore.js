import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './todos/todos.reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const  configureStore = (preloadedState) =>{
 return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(logger)
 )
}

export default configureStore;