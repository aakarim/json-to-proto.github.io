module.exports = {
    context: __dirname,

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.json$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.json' ],
    },

    entry: {
        app: './src/app'
    },

    output: {
        path: __dirname + '/static/js',
        filename: '[name].js'
    },
};