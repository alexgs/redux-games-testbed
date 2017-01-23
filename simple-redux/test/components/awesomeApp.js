'use strict';

import React from 'react';
import { createStore } from 'redux';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { shallow } from 'enzyme';

import AwesomeApp from '../../src/AwesomeApp';
import counterReducer from '../../src/reducers/counterReducer';

chai.use( dirtyChai );
let expect = chai.expect;

describe.only( 'The "Awesome App" component', function() {
    let store = null;

    beforeEach( function() {
        store = createStore( counterReducer );
    } );

    it( 'contains one _h1_ element', function() {
        let wrapper = shallow( <AwesomeApp store={ store } /> );
        let h1elements = wrapper.find( 'h1' );
        expect( h1elements ).to.have.lengthOf( 1 );
        expect( h1elements.text() ).to.equal( 'Hello Awesome World!' );
    } );

} );
