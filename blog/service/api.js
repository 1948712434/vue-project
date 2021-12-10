const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');

const pool = mysql.createPool({
    ...dbConfig.mysql,
    multipleStatements: true    // 多语句查询
})


var https = require('https');
var qs = require('querystring');

module.exports = {
    getValue(req, res, next) {
        var id = req.query.id;
        pool.getConnection((err, connection) => {
            var sql = sqlMap.getValue;
            connection.query(sql, [id], (err, result) => {
                res.json(result);

                connection.release();
            })
        })
    },
    //登录
    login(req, res, next) {
        let name = req.query.userName;
        let password = req.query.password;

        pool.getConnection((err, connection) => {
            let sql = sqlMap.login;

            connection.query(sql,[name],(err,result)=>{
                res.json(result);

                connection.release();
            })
        })
    },
    //人脸分割
    space(req,res,next){
        const param = qs.stringify({
            'grant_type': 'client_credentials',
            'client_id': 'gFQ4nKxsjeCDtejK8MGd1k0B',
            'client_secret': 'khBgXxciiBwjG759gR5yX7I42NTZ7VGM'
        });
        
        https.get(
            {
                hostname: 'aip.baidubce.com',
                path: '/oauth/2.0/token?' + param,
                agent: false
            },
            function (result) {
                // 在标准输出中查看运行结果
                // result.pipe(process.stdout)
                res.send(result)
                // res.json()
            }
        );
    }
}