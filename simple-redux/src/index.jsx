'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AwesomeApp from './AwesomeApp';

ReactDom.render(
    <Provider store={ store } >
        <AwesomeApp />
    </Provider>,
    document.getElementById( 'awesome-app-root' )
);
