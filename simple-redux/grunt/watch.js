let path = require( 'path' );
let srcPath = path.resolve( __dirname, '..', 'src' );
let testPath = path.resolve( __dirname, '..', 'test' );

let watchConfig = {
    mochaTests: {
        files: [
            srcPath  + '/**/*.js',
            srcPath  + '/**/*.jsx',
            testPath + '/**/*.js'
        ],
        options: {
            force: true,
            spawn: false
        },
        tasks: [ 'mochaTest' ]
    }
};

module.exports = function ( grunt ) {
    grunt.option( 'force', true );
    return watchConfig;
};
