let path = require( 'path' );

module.exports = {
    srcPath: path.resolve( __dirname, '..', 'src' ),

    srcResolve: function srcResolve() {
        return path.resolve( this.srcPath, ...arguments );
    }
};
