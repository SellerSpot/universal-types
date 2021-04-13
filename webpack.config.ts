import path from 'path';
import webpack, { Configuration } from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import WebpackShellPluginNext from 'webpack-shell-plugin-next';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import nodeExternals from 'webpack-node-externals';

const webpackConfiguration = (env: {
    production?: boolean;
    development?: boolean;
}): Configuration => {
    const isProduction = env.production ? true : false;
    return {
        entry: './src',
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
                ? new WebpackShellPluginNext({
                      onDoneWatch: {
                          scripts: ['npm run build:dev'],
                          blocking: false,
                          parallel: true,
                      },
                      safe: true,
                  })
                : new webpack.DefinePlugin({}),
        ],
        devtool: false,
        watch: !isProduction,
    };
};

export default webpackConfiguration;
