import React from 'react';
import AddTodo from '../components/AddTodo';
import VisibleTodoList from '../components/VisibleTodoList';
import Footer from '../components/Footer';
import { fetchTodos } from '../actions';
import { connect } from 'react-redux';

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchTodos());
  }

  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default connect()(App);
