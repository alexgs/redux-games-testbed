import React from 'react';

// TODO Use Lodash to replicate the example from Redux docs
// http://redux.js.org/docs/recipes/UsingImmutableJS.html#use-a-higher-order-component-to-convert-your-smart-components-immutablejs-props-to-your-dumb-components-javascript-props

export const toJS = function( DisplayComponent ) {
    return function wrapDisplayComponent( propsFromContainer ) {
        console.log( propsFromContainer );
        // const props = propsFromContainer.toJS();
        // return <DisplayComponent { ...props } />
        return <DisplayComponent />
    };
};
