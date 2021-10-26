const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');

const pool = mysql.createPool({
    ...dbConfig.mysql,
    multipleStatements: true    // 多语句查询
})

module.exports = {
    getValue(req, res, next) {
        var id = req.query.id;
        pool.getConnection((err, connection) => {
            var sql = sqlMap.getValue;
            connection.query(sql, [id], (err, result) => {
                res.json(result);
                
                
                console.log(err)
                connection.release();
            })
        })
    }
}