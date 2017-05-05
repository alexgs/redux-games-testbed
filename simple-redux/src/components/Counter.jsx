import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import simpleActionCreator from '../actions/simpleActionCreators';

const Counter = function( props ) {
    return (
        <div>
            <p>Counter value: { props.value }</p>
            <p><button onClick={ props.handleClick }>+</button></p>
        </div>
    );
};

Counter.propTypes = {
    handleClick: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
};

const mapStateToProps = function( state ) {
    return {
        value: state.value
    }
};

const mapDispatchToProps = function( dispatch ) {
    return {
        handleClick: function() {
            dispatch( simpleActionCreator.increment() );
        }
    }
};

const CounterContainer = connect( mapStateToProps, mapDispatchToProps )( Counter );

export default CounterContainer;
