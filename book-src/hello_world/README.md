# 创建过程，并在 node 里面执行
- 创建 package.json
  npm init
- 安装 React
  npm install --save react
- 创建目录 src
- 创建文件 src/App.js，并编写 React 组件
- 安装 react-dom
  npm install --save react-dom
- 创建文件 src/server.js，并编写 node 端使用代码
- 安装 babel-register (Require Hook 模式)
  npm install --save-dev babel-register
- 安装 ES2015 和 React 的预设
  npm install --save-dev babel-preset-es2015 babel-preset-react
- 在 package.json 里面的 “scripts” 里面添加 "start": "node index",
- 执行 npm start 可以看到结果
- 第二章结束

# 在浏览器中运行
- 创建 src/client.js
- 创建 index.html
- 安装 webpack 和 babel-loader
  npm install --save-dev webpack babel-loader babel-core
- 添加 webpack.config.js 文件，注意：babel 需要写成 babel-loader
- 在 package.json 里面的 “scripts” 里面添加 "build": "webpack",
- 运行 npm run build
- 全局安装 http-server
  npm install -g http-server
- 在 package.json 里面的 “scripts” 里面替换 "start": "webpack && http-server -p 3000",
- 执行 npm start 以编译和启动 http-server
- 访问 http://127.0.0.1:3000 看到结果
- 第三章结果





