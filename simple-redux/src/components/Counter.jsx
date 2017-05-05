import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { toJS } from './DisplayComponentWrapper';

const Counter = function( props ) {
    return (
        <div>
            <p>Counter value: { props.data.value }</p>
            <p><button onClick={ props.handleClick }>+</button></p>
        </div>
    );
};

Counter.propTypes = {
    data: PropTypes.shape( {
        id: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
    } ).isRequired,
    handleClick: PropTypes.func.isRequired,
};

const mapStateToProps = function( state ) {
    return {
        data: state.getIn( [ 'counters', 0 ] )
    }
};

const mapDispatchToProps = function( dispatch ) {
    return {
        handleClick: function() {
            dispatch( actions.increment() );
        }
    }
};

const CounterContainer = connect( mapStateToProps, mapDispatchToProps )( toJS( Counter ) );

export default CounterContainer;
