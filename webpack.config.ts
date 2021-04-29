import path from 'path';
import { Configuration, DefinePlugin } from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { WebpackCustomRunScriptsPlugin } from '@sellerspot/webpack-run-scripts-custom-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import nodeExternals from 'webpack-node-externals';

const webpackConfiguration = (env: {
    production?: boolean;
    development?: boolean;
}): Configuration => {
    const isProduction = env.production ? true : false;
    return {
        entry: './src',
        target: 'node',
        externals: [nodeExternals()],
        resolve: {
            extensions: ['.ts', '.d.ts'],
        },
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'index.js',
            libraryTarget: 'umd',
            umdNamedDefine: true,
            library: 'universal-types',
            globalObject: 'this', // refernceError: self isnot defined fix
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/i,
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: false, // this generates .d.ts when it is false
                    },
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new ForkTsCheckerWebpackPlugin({
                eslint: {
                    files: './src',
                },
            }),
            !isProduction
                ? new WebpackCustomRunScriptsPlugin({
                      command: 'npm run build:dev',
                  })
                : new DefinePlugin({}),
        ],
        devtool: false,
        watch: !isProduction,
    };
};

export default webpackConfiguration;
