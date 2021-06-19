const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            //...
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            github: 'assets/github-icon.svg',
                            linkedin: 'assets/LI-In-Bug.svg'

                        },
                    },
                ],
            },
        ],
    },
    //...
};
