module.exports = {
    test: {
        options: {
            clearRequireCache: true,
            reporter: 'spec',
            require: 'babel-register'
        },
        src: [ 'test/**/*.js' ]
    }
};
