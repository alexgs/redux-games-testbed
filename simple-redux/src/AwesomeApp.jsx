import React, { Component } from 'react';
import simpleActionCreator from './actions/simpleActionCreators';

class AwesomeApp extends Component {
    constructor( props ) {
        super( props );
        this.state = props.store.getState();
    }

    componentDidMount() {
        this.props.store.subscribe( this.handleChange.bind( this ) );
    }

    handleChange() {
        this.setState( this.props.store.getState() );
}

    handleClick() {
        let action = simpleActionCreator.increment();
        this.props.store.dispatch( action );
    }

    render() {
        return (
            <div>
                <h1>Hello Awesome World!</h1>
                <p>Counter value: { this.state.value }</p>
                <p><button onClick={ this.handleClick.bind( this ) }>+</button></p>
            </div>
        );
    }
}

export default AwesomeApp;
