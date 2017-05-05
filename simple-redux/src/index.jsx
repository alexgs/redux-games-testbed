'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import store from './store';
import AwesomeApp from './AwesomeApp';

ReactDom.render(
    <AwesomeApp store={ store } />,
    document.getElementById( 'awesome-app-root' )
);
