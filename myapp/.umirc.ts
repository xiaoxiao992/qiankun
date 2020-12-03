import { defineConfig } from 'umi';

import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

// const chainWebpack = (config, { webpack }) => {
//   config.plugin('monaco-editor').use(MonacoWebpackPlugin, [
//       {
//           languages: ['yaml']
//       }
//   ])
// }


export default defineConfig({
  publicPath: '/app1App/',
  outputPath: './dist/app1App',
  mountElementId: 'app1App',
  nodeModulesTransform: {
    type: 'none',
  },
  qiankun: {
    slave: {},
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  chainWebpack(config) {
  	config.merge({
  		output: {
  			library: `app1App`,
  			libraryTarget: 'umd'
  		}
    });
    config.plugin('monaco-editor').use(MonacoWebpackPlugin, [
      {
        languages: ["json", "javascript", "typescript"],
      }
     ])
  }
});
