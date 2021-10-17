"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const Busboy = require('busboy');
const fs = require('fs');
const path = require('path');
const Result = require('./Result');
const UPLOAD_FILES_DIR = path.join(process.cwd(), '/static', '/uploadfiles');
function mkdir(dirPath) {
    if (fs.existsSync(dirPath)) {
        return true;
    }
    if (mkdir(path.dirname(dirPath))) {
        fs.mkdirSync(dirPath);
        return true;
    }
}
async function upload(ctx) {
    const req = ctx.req;
    const timeStamp = Number(new Date());
    let uploadDirPath = path.join(UPLOAD_FILES_DIR, String(timeStamp));
    if (!mkdir(uploadDirPath)) {
        return Promise.reject(false);
    }
    let busboy = new Busboy({ headers: req.headers });
    let count = 0;
    ctx.body = await new Promise((resolve, reject) => {
        busboy.on('file', function (fieldname, file, filename) {
            ++count;
            let saveTo = path.join(uploadDirPath, filename);
            file.pipe(fs.createWriteStream(saveTo));
            file.on('end', function () {
                --count;
                if (count === 0) {
                    return resolve(new Result(true, timeStamp));
                }
            });
        });
        busboy.on('error', function () {
            return reject(new Result(false, '上传文件解析错误'));
        });
        req.pipe(busboy);
    });
}
exports.upload = upload;
//# sourceMappingURL=upload.js.map