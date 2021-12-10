const sqlMap = {
    getValue: 'SELECT * FROM blog_user WHERE id = ?',
    login: `SELECT * FROM blog_user WHERE name=?`,
}

module.exports = sqlMap