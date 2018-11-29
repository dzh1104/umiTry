
// ref: https://umijs.org/config/
export default {
  plugins: [
    // 参数配置地址如下
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      // 开启 dva-immer 以简化 reducer 编写
      dva: {
        immer: true,
      },
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: './components/Loading.js',
      },
      title: 'cycle',
      dll: false,
      routes: {
        exclude: [/models\//, /components\//, /services\//],
      },
      hardSource: false,
    }],
  ],
}
