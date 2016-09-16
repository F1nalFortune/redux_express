import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import Todo from './Todo';

const VisibleTodoList = ({ todos, onTodoClick }) => (
  <div>
    <ul>
      { todos.map( todo =>
        <Todo
          key={todo._id}
          {...todo}
          onClick={ () => onTodoClick(todo._id) }
        />
      )}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return { todos: getVisible(state.todos, state.filter) }
}

const mapDispatchToProps = (dispatch) => {
  return { onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  }}
}

const getVisible = (todos, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter( t => t.completed );
    case 'SHOW_ACTIVE':
      return todos.filter( t => !t.completed );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList);
