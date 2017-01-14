import { INCREMENT_COUNTER } from '../constants';

let simpleActionCreators = {

    increment() {
        return {
            type: INCREMENT_COUNTER
        };
    }

};

export default simpleActionCreators;
