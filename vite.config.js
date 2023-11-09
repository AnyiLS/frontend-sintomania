import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import jsconfigPaths from 'vite-jsconfig-paths'
import macrosPlugin from "vite-plugin-babel-macros"
import { terser } from 'rollup-plugin-terser';
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    include: /\.(jsx|tsx)$/,
			babel: {
				plugins: ['styled-components'],
				babelrc: false,
				configFile: false,
			},
  }), jsconfigPaths(), macrosPlugin()],
})
