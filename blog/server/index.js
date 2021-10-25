const routerApi = require('./router');
const express = require('express');
const app = express();

app.use(express.json());

app.use('/api',routerApi);

app.listen(5000)
console.log('启动了node服务');