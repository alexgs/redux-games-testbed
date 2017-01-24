'use strict';

import React from 'react';
import { createStore } from 'redux';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { shallow } from 'enzyme';

import AwesomeApp from '../../src/AwesomeApp';
import actionCreators from '../../src/actions/simpleActionCreators';
import counterReducer from '../../src/reducers/counterReducer';

chai.use( sinonChai );
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
        expect( h1elements ).has.lengthOf( 1 );
        expect( h1elements.text() ).equals( 'Hello Awesome World!' );
    } );

    context( 'responds to click events', function() {

        beforeEach( function() {
            sinon.spy( store, 'dispatch' );
        } );

        afterEach( function() {
            store.dispatch.restore();
        } );

        it( 'on the plus button', function() {
            let wrapper = shallow( <AwesomeApp store={ store } /> );
            let buttons = wrapper.find( 'button' );
            expect( buttons ).has.lengthOf( 1 );
            expect( buttons.text() ).equals( '+' );
        } );

        it( 'by dispatching an "INCREMENT_COUNTER" action to the store', function() {
            let action = actionCreators.increment();
            let wrapper = shallow( <AwesomeApp store={ store } /> );
            wrapper.find( 'button' ).simulate( 'click' );

            expect( store.dispatch ).is.calledOnce();
            expect( store.dispatch ).is.calledWithExactly( action );
        } );

    } );

    it( 'updates the displayed value when the store changes', function() {
        let action = actionCreators.increment();
        let wrapper = shallow( <AwesomeApp store={ store } /> );
        // wrapper.find( 'button' ).simulate( 'click' );
        store.dispatch( action );

        let valueElement = wrapper.find( '.state-value' );
        let valueText = valueElement.text();
        let value = parseInt( valueText );
        expect( isNaN( value ) ).to.be.false();
        expect( store.getState().get( 'value' ) ).to.equal( 1 );
        expect( value ).to.equal( 1 );

    } );

} );
