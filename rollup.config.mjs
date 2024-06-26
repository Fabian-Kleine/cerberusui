import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from "rollup-plugin-postcss";
import del from 'rollup-plugin-delete';
import external from 'rollup-plugin-peer-deps-external';
import autoExternal from 'rollup-plugin-auto-external';
import path from "path";
import packageJson from './package.json' assert { type: 'json' };

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      autoExternal({
        builtins: false,
        dependencies: true,
        peerDependencies: false,
        packagePath: path.resolve("./package.json")
      }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json', exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.ts'] }),
      postcss({ extensions: ['.css'], inject: true, extract: false }),
      del({ targets: ['dist/cjs/types/stories', 'dist/esm/types/stories'] })
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/, "react", "react-dom"]
  },
];