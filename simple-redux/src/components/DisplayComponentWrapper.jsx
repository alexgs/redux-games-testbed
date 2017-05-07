import Immutable from 'immutable';
import React from 'react';
import _ from 'lodash';

export const toJS = function( DisplayComponent ) {
    return function wrapDisplayComponent( propsFromContainer ) {
        const props = { };
        _.keys( propsFromContainer ).forEach( key => {
            const value = propsFromContainer[ key ];
            let newValue = null;
            if ( Immutable.isCollection( value ) ) {
                newValue = value.toJS();
            } else {
                newValue = value;
            }
            _.set( props, key, newValue );
        } );

        return <DisplayComponent { ...props } />
    };
};
