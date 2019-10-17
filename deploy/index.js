const fs = require('fs')
const node_ssh = require('node-ssh')
const chalk = require('chalk')
const archiver = require('archiver')
const config = require('./config')

let ssh = new node_ssh()

console.log('开始打包zip')
startZip()

function startZip() {
    const archive = archiver('zip', {
        zlib: { level: 9 },
    }).on('error', err => {
        throw err
    })
    const output = fs.createWriteStream(`${__dirname}/dist.zip`).on('close', err => {
        if (err) {
            console.log('关闭archiver异常:', err)
            return
        }
        console.log(chalk.green('已生成zip包'))
        console.log('开始上传dist.zip至服务器...')
        uploadFile()
    })
    archive.pipe(output)
    archive.directory(config.distPath, '/')
    archive.finalize()
}

function uploadFile() {
    ssh.connect(config)
        .then(() => {
            console.log(chalk.green(`SSH connnect ${config.host} succeed`))
            console.log('开始上传文件')
            ssh.putFile(`${__dirname}/dist.zip`, `${config.webDir}/dist.zip`)
                .then(() => {
                    console.log(chalk.green('上传文件成功'))
                    console.log('开始执行远端脚本')
                    statrRemoteShell()
                })
                .catch(err => {
                    console.log(chalk.red('文件传输异常', err))
                    process.exit(0)
                })
        })
        .catch(err => {
            console.log(chalk.red('连接失败', err))
            process.exit(0)
        })
}

function runCommand(command) {
    return new Promise((resolve, reject) => {
        ssh.execCommand(command, { cwd: config.webDir })
            .then(result => {
                resolve()
                console.log(chalk.blue(result.stdout))
                console.log(chalk.red(result.stderr))
            })
            .catch(err => {
                reject(err)
            })
    })
}

function statrRemoteShell() {
    const commands = [`cd ${config.webDir}`, 'pwd', 'unzip -o dist.zip && rm -f dist.zip']
    const promises = []
    for (let i = 0; i < commands.length; i += 1) {
        promises.push(runCommand(commands[i]))
    }
    Promise.all(promises)
        .then(() => {
            console.log(chalk.green('文件解压成功'))
            console.log('开始删除本地dist.zip')
            deleteLocalZip()
        })
        .catch(err => {
            console.log(chalk.red('文件解压失败', err))
            process.exit(0)
        })
}

function deleteLocalZip() {
    fs.unlink(`${__dirname}/dist.zip`, err => {
        if (err) {
            console.log(chalk.red('本地dist.zip删除失败', err))
        }
        console.log(chalk.green('本地dist.zip删除成功'))
        process.exit(0)
    })
}
