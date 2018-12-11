import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const TodoList = ({ todos, addTodo }) => (
  <Fragment>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
    <button type="button" onClick={() => addTodo('Novo Todo')}>
      Adicionar
    </button>
  </Fragment>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ).isRequired,
  addTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch({ type: 'ADD_TODO', payload: { text } }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
