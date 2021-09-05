import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodosStart, removeTodo } from '../../redux/todos/todos.actions';
import  './styles.css';

const mapState = (state) => ({
    todos: state.todosData.todos,
  })

const TodoList = (props) => {
    const {todos} = useSelector(mapState);
    const dispatch = useDispatch();
    console.log('todossssssssssssssssssssssss:',todos)
    const [toggle, setToggle] = useState(false)
  
    useEffect(() => {
      console.log('App.js renderd, so useEffect works perfect')
    }, [])
  
    const handleRemoveTodo = (id) => {
      dispatch(removeTodo(id))
    }
  
    const fetchTodosHandler = () => {
      dispatch(fetchTodosStart())
    }
  
    const handleToggle = () => {
      setToggle(!toggle)
    }
    return (
        <>
            <div className='todoWrapper'>
            <button onClick={handleToggle}>toggle message</button>
            {toggle && (<div>this is description of toggle to test useState hook</div>)}
            <button onClick={fetchTodosHandler}>fetch todos from api</button>
            </div>
            <ul className='todos'>
                {todos.map(todo => (
                <li key={todo.id}><div>Name: {todo.name}</div><div>Username: {todo.username}</div><div>website :{todo.website}</div><button onClick={event => handleRemoveTodo(todo.id)}>remove todo</button></li>
                ))}
            </ul>
        </>
    )
}

export default TodoList;