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

const rootReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case todosTypes.REMOVE_TODO : 
        console.log('todos redux',state.todos)
        return {
            ...state,
        }
        default:
            return state;
    }

}

export default rootReducer;