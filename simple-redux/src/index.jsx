'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import counterReducer from './reducers/counterReducer';
import AwesomeApp from './AwesomeApp';

let store = createStore( counterReducer );

ReactDOM.render(
    <AwesomeApp store={ store } />,
    document.getElementById( 'awesome-app-root' )
);
