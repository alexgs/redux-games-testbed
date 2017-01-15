import React, { Component } from 'react';

class AwesomeApp extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            // Be sure to call `store.getState()` and not just hand it the
            // store object!
            value: props.store.getState()
        };
    }

    render() {
        return (
            <div>
                <h1>Hello Awesome World!</h1>
                <p>Counter value: { this.state.value }</p>
            </div>
        );
    }
}

export default AwesomeApp;
