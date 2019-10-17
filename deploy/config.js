const path = require('path')

module.exports = {
    host: '10.240.178.200',
    webDir: '/var/www/html/hivue',
    distPath: path.resolve(__dirname, '../docs'),
    port: 22,
    username: 'root',
    password: '123456',
}
