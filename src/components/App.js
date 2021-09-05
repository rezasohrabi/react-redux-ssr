import React from 'react';
import { Switch, Route } from 'react-router';
import MainLayout from '../layouts/Main';
import ImageList from './ImageList';
import TodoList from './TodoList';




const App = (props) => {

  return (
    // <Switch>
    //   <Route exact path='/' render={() => {
    //     <MainLayout >
    //       <TodoList />
    //     </MainLayout>
    //   }}/>
    //   <Route path='/images' render={() => {
    //     <MainLayout>
    //       <ImageList />
    //     </MainLayout>
    //   }} />
    // </Switch>
    <TodoList />
  )
}

export default App;
