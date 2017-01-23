'use strict';

import React from 'react';
import { createStore } from 'redux';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { shallow } from 'enzyme';

import AwesomeApp from '../../src/AwesomeApp';
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
            sinon.spy( AwesomeApp.prototype, 'handleClick' );
            sinon.spy( store, 'dispatch' );
        } );

        afterEach( function() {
            AwesomeApp.prototype.handleClick.restore();
            store.dispatch.restore();
        } );

        it( 'on the plus button', function() {
            expect( AwesomeApp.prototype.handleClick ).has.callCount( 0 );
            let wrapper = shallow( <AwesomeApp store={ store } /> );
            let buttons = wrapper.find( 'button' );
            expect( buttons ).has.lengthOf( 1 );
            expect( buttons.text() ).equals( '+' );
        } );

        it( 'using the `handleClick` function', function() {
            expect( AwesomeApp.prototype.handleClick ).has.callCount( 0 );
            let wrapper = shallow( <AwesomeApp store={ store } /> );
            wrapper.find( 'button' ).simulate( 'click' );
            expect( AwesomeApp.prototype.handleClick ).is.calledOnce();
        } );

        it( 'by dispatching an action to the store', function() {
            expect( AwesomeApp.prototype.handleClick ).has.callCount( 0 );
            let wrapper = shallow( <AwesomeApp store={ store } /> );
            wrapper.find( 'button' ).simulate( 'click' );

            expect( AwesomeApp.prototype.handleClick ).is.calledOnce();
            expect( store.dispatch ).is.calledOnce();
            expect( store.dispatch ).is.calledAfter( AwesomeApp.prototype.handleClick );
        } );

    } );

    it( 'updates the displayed value when the store changes' );

} );
