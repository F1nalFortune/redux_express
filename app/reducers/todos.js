const todos = (state = [], action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return action.todos;
    case 'ADD_TODO':
      return [
        ...state,
        {
          _id: action._id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map( todo => {
        if (todo._id !== action._id)
          return todo;
        return {
          ...todo,
          completed: action.completed
        }
      });
    default:
      return state;
  }
};

export default todos;
