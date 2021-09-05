import todosTypes from "./todos.types";

export const removeTodo = (todoId) => ({
    type: todosTypes.REMOVE_TODO,
    payload: todoId,
});

export const fetchTodosStart = () => ({
    type: todosTypes.Fetch_TODOS_START,
});

export const setTodos = (todos) => ({
    type: todosTypes.SET_TODOS,
    payload: todos,
})