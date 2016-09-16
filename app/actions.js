import $ from 'jquery';

const getTodos = (todos) => {
  return {
    type: 'GET_TODOS',
    todos
  }
}

const todo = (type, item) => {
  return {
    type,
    text: item.text,
    completed: item.completed,
    _id: item._id
  }
}

export const fetchTodos = () => {
  return (dispatch) => {
    $.ajax({
      url: '/todos',
      type: 'GET'
    }).done( todos => {
      dispatch(getTodos(todos));
    })
  }
}

export const addTodo = (text) => {
  return (dispatch) => {
    $.ajax({
      url: '/todos',
      type: 'POST',
      data: { text, completed: false }
    }).done( data => {
      dispatch(todo('ADD_TODO', data));
    });
  }
}

export const toggleTodo = (id) => {
  return (dispatch) => {
    $.ajax({
      url: `/todos/${id}`,
      type: 'PUT'
    }).done( data => {
      dispatch(todo('TOGGLE_TODO', data));
    });
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  }
}
