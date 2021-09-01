import todosTypes from "./todos.types";

export const removeTodo = (todoId) => ({
    type: todosTypes.REMOVE_TODO,
    payload: todoId,
})