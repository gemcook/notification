const fs = require('fs-extra');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const json = require('rollup-plugin-json');
const postcss = require('rollup-plugin-postcss');

export default [
  {
    input: 'src/index.js',
    external: ['react', 'react-dom', 'semantic-ui-react', 'semantic-ui-css'],
    plugins: [
      {
        name: 'clean lib dir',
        buildStart: async () => {
          const libPath = './lib';
          const exists = await fs.pathExists(libPath);
          if (exists) {
            fs.emptyDirSync(libPath);
          }
        },
        buildEnd: err => {
          if (err) {
            throw err;
          }
        },
      },
      json({
        include: 'node_modules/**',
      }),
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        // Node.js の fs, path 等のモジュールを bundle 対象外にする
        preferBuiltins: false,
      }),
      commonjs({
        include: 'node_modules/**',
        ignore: ['indexof'],
      }),
      babel({
        runtimeHelpers: true,
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {node: 'current'},
              corejs: 3,
              useBuiltIns: 'usage',
              loose: true,
              modules: false,
            },
          ],
          '@babel/preset-flow',
          ['@babel/preset-react', {useBuiltIns: true}],
        ],
        plugins: [
          [
            '@babel/plugin-transform-runtime',
            {
              corejs: 3,
            },
          ],
          ['@babel/proposal-class-properties', {loose: true}],
          ['@babel/plugin-proposal-private-methods', {loose: true}],
        ],
      }),
      postcss({
        extensions: ['.css', '.scss'],
        extract: 'lib/styles/index.css',
      }),
      {
        name: 'sync scss',
        buildEnd: err => {
          if (err) {
            throw err;
          }

          fs.copySync('./src/styles', './lib/styles', {
            dereference: true,
          });
        },
      },
    ],
    output: {
      file: 'lib/index.js',
      format: 'umd',
      name: 'Notification',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'semantic-ui-react': 'SemanticUiReact',
      },
    },
  },
];
