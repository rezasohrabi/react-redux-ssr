import todosTypes from "./todos.types"

const INITIAL_STATE = {
    todos: [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      phone: "1-463-123-4447",
      website: "ramiro.info",
    },
          
    ]
}

const todosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case todosTypes.REMOVE_TODO:
      console.log('redux state', whatIsIt(state))
      return {
        ...state,
        todos: state.todos && state.todos.filter(
          (todo) => {
            console.log('todo::',todo)
            return todo.id !== action.payload
          }
        ),
      };
    default:
      return state;
  }
};

export default todosReducer;

var stringConstructor = "test".constructor;
var arrayConstructor = [].constructor;
var objectConstructor = ({}).constructor;

function whatIsIt(object) {
    if (object === null) {
        return "null";
    }
    if (object === undefined) {
        return "undefined";
    }
    if (object.constructor === stringConstructor) {
        return "String";
    }
    if (object.constructor === arrayConstructor) {
        return "Array";
    }
    if (object.constructor === objectConstructor) {
        return "Object";
    }
    {
        return "don't know";
    }
}