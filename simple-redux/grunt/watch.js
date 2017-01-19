let config = require( '../config' );

let watchConfig = {
    mochaTests: {
        files: [
            config.srcPath  + '/**/*.js',
            config.srcPath  + '/**/*.jsx',
            config.testPath + '/**/*.js'
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
