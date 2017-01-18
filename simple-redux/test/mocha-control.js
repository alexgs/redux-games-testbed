'use strict';

import chai from 'chai';
import dirtyChai from 'dirty-chai';

chai.use( dirtyChai );
let expect = chai.expect;

describe( 'Mocha', function() {

    it( 'should work', function() {
        expect( 1 + 1 ).to.equal( 2 );
        expect( true ).to.be.ok();
    } );

} );
