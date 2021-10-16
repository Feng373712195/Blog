import { rejects } from 'assert'
import { resolve } from 'path/posix'

const Busboy = require('busboy')
const fs = require('fs')
const path = require('path')

const Result = require('./Result')

const UPLOAD_FILES_DIR = path.join(process.cwd(), '/static', '/uploadfiles')

// 创建文件夹
function mkdir (dirPath:string) {
  if (fs.existsSync(dirPath)) {return true}
  if (mkdir(path.dirname(dirPath))) {
    fs.mkdirSync(dirPath)
    return true
  }
}

// 上传文件
export async function upload (ctx:any) {
  const req = ctx.req
  // 时间戳用于命名上传文件夹名称
  const timeStamp = Number(new Date());
  let uploadDirPath = path.join(UPLOAD_FILES_DIR, String(timeStamp))

  if (!mkdir(uploadDirPath)) {return Promise.reject(false)}

  let busboy = new Busboy({headers: req.headers})

  let count = 0;
  ctx.body = await new Promise((resolve, reject) => {
    // 解析请求文件事件
    busboy.on('file', function (fieldname:string, file:any, filename:string) {
      ++count;
      let saveTo = path.join(uploadDirPath, filename)
      // 文件保存到制定路径
      file.pipe(fs.createWriteStream(saveTo))
      // 文件写入事件结束
      file.on('end', function () {
        --count;
        if (count === 0) {return resolve(new Result(true, timeStamp))}
      })
    })
    // 解析错误事件
    busboy.on('error', function () {
      return reject(new Result(false, '上传文件解析错误'))
    })
    req.pipe(busboy);
  })
}
