const routerApi = require('./router');
const express = require('express');

const app = express();

app.use(express.json());

// 后端api路由
app.use('/api', routerApi);

// 监听端口
app.listen(5000);
console.log('success listen at port:5000......');