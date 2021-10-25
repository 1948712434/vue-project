const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');

const pool = mysql.createPool({
    ...dbConfig.mysql,
    multipleStatements:true //多条语句同事查询
});

module.exports = {
    getValue(req,res,next){
        let id = req.query.id;
        pool.getConnection((err,connection) => {
            var sql = sqlMap.getValue;
            connection.query(sql,[id],(err,result)=>{
                res.json(result);
                connection.release();
            })
        })
    }
}


