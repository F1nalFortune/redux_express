import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

const FilterLink = ({ active, children, onClick }) => {
  if (active)
    return <span>{children}</span>
  return (
    <a
      onClick={ e => {
        e.preventDefault();
        onClick();
    }}>
        {children}
      </a>
  );
};

const mapStateToProps = (state, props) => {
  return { active: props.filter === state.filter }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(props.filter));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
