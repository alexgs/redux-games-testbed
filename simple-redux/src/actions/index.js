'use strict';

import { INCREMENT_COUNTER } from '../constants';

export const increment = function() {
    return {
        type: INCREMENT_COUNTER
    };
};

export default {
    increment
};
