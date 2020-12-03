import { defineConfig } from 'umi';

export default defineConfig({
  proxy: {
    '/api/app1': {
      target: 'http://localhost:8886',
      changeOrigin: true,
    },
  },
  qiankun: {
    master: {},
  },
  // qiankun: {
  //   master: {
  //     // 注册子应用信息
  //     apps: [
  //       {
  //         name: '/app1App', // 唯一 id
  //         entry: '//localhost:8886', // html entry
  //       },
  //       {
  //         name: 'calculateApp', // 应用的名字
  //         entry: `//localhost:9007`,
  //         // entry: `http://192.168.4.108`, // 默认会加载这个html，解析里面的js，动态的执行，子应用必须支持跨域
  //       },
  //     ],
  //   },
  // },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      // component: '@/pages/index',
      component: '@/layouts/index',
      routes: [
        {
          path: '/reateEditor',
          microApp: 'app1',
          settings: {
            singular: false,
          },
          microAppProps: {
            autoSetLoading: true,
            className: 'appClassName',
            wrapperClassName: 'wrapperClass',
          },
        },
        // {
        //   path: '/calculate', microApp: 'calculateApp'
        // }
      ]
   },

  ],
});
