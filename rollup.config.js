import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: './src/JsxServer.jsx',
    output: {
        file: 'dist/index.mjs',
        format: 'esm'
    },
    external: ['express'],
    plugins: [
        nodeResolve({ extensions: ['.jsx', '.js'] }),
        babel({
            babelHelpers: 'inline',
            plugins: [
                [
                    '@babel/plugin-transform-react-jsx',
                    {
                        pragma: 'expressJsx.create'
                    }
                ]
            ]
        })
    ]
}