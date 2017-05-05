'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import counterReducer from './reducers/counterReducer';
import AwesomeApp from './AwesomeApp';

let store = createStore( counterReducer );

ReactDom.render(
    <AwesomeApp store={ store } />,
    document.getElementById( 'awesome-app-root' )
);
