const fs = require('fs')
const node_ssh = require('node-ssh')
const archiver = require('archiver')
const config = require('./config')
const { infoLog, successLog, errorLog } = require('./utils')

let ssh = new node_ssh()

console.log('开始打包zip')
startZip()

// 开始打包
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
        successLog('zip打包成功')
        infoLog(`开始连接${config.host}`)
        uploadFile()
    })
    archive.pipe(output)
    archive.directory(config.distPath, '/')
    archive.finalize()
}

// 上传文件
function uploadFile() {
    ssh.connect(config)
        .then(() => {
            successLog(`SSH连接成功`)
            console.log('开始上传文件')
            ssh.putFile(`${__dirname}/dist.zip`, `${config.webDir}/dist.zip`)
                .then(() => {
                    successLog('上传文件成功')
                    console.log('开始执行远端脚本')
                    statrRemoteShell()
                })
                .catch(err => {
                    errorLog('文件传输异常', err)
                    process.exit(0)
                })
        })
        .catch(err => {
            errorLog('连接失败', err)
            process.exit(0)
        })
}

// 执行Linux命令
function runCommand(command) {
    return new Promise((resolve, reject) => {
        ssh.execCommand(command, { cwd: config.webDir })
            .then(result => {
                resolve()
                if (result.stdout) {
                    successLog(result.stdout)
                }
                if (result.stderr) {
                    errorLog(result.stderr)
                }
            })
            .catch(err => {
                reject(err)
            })
    })
}

// 开始执行远程命令
function statrRemoteShell() {
    const commands = [`cd ${config.webDir}`, 'pwd', 'unzip -o dist.zip && rm -f dist.zip']
    const promises = []
    for (let i = 0; i < commands.length; i += 1) {
        promises.push(runCommand(commands[i]))
    }
    Promise.all(promises)
        .then(() => {
            successLog('文件解压成功')
            console.log('开始删除本地dist.zip')
            deleteLocalZip()
        })
        .catch(err => {
            errorLog('文件解压失败', err)
            process.exit(0)
        })
}

// 删除本地dist.zip包
function deleteLocalZip() {
    fs.unlink(`${__dirname}/dist.zip`, err => {
        if (err) {
            errorLog('本地dist.zip删除失败', err)
        }
        successLog('本地dist.zip删除成功')
        process.exit(0)
    })
}
