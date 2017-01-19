module.exports = {

    'build-dev': {
        description: 'Build the project for development',
        tasks: [ 'webpack:dev' ]
    },

    default: [ 'build-dev' ],

    dev: {
        description: 'Start the Webpack dev server',
        tasks: [ 'webpack-dev-server:dev' ]
    },

    mocha: [ 'mochaTest' ],

    test: {
        description: 'Test continuously, watching for changes',
        tasks: [ 'mochaTest', 'watch:mochaTests' ]
    }

};
