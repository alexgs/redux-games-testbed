'use strict';

import Immutable from 'immutable';
import { INCREMENT_COUNTER } from '../constants';

let simpleActionCreators = {

    increment() {
        return Immutable.Map( {
            type: INCREMENT_COUNTER
        } );
    }

};

export default simpleActionCreators;
