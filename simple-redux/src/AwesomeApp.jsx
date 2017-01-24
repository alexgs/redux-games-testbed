import React, { Component, PropTypes } from 'react';
import simpleActionCreator from './actions/simpleActionCreators';

class AwesomeApp extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            value: props.store.getState().get( 'value' )
        };
    }

    componentDidMount() {
        this.props.store.subscribe( this.handleChange.bind( this ) );
    }

    handleChange() {
        this.setState( {
            value: this.props.store.getState().get( 'value' )
        } );
    }

    handleClick() {
        let action = simpleActionCreator.increment();
        this.props.store.dispatch( action );
    }

    render() {
        return (
            <div>
                <h1>Hello Awesome World!</h1>
                <p>Counter value:&nbsp;
                    <span className="state-value">{ this.state.value }</span>
                </p>
                <p><button onClick={ this.handleClick.bind( this ) }>+</button></p>
            </div>
        );
    }
}

AwesomeApp.propTypes = {
    store: PropTypes.shape( {
        dispatch: PropTypes.function,
        getState: PropTypes.function,
        subscribe: PropTypes.function
    } ).isRequired
};

export default AwesomeApp;
