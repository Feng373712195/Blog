
module.exports = class Result {
  constructor (success:boolean, data:any, code:number) {
    let result = {
      success,
      code: code ? code : (success ? 1 : 0),
      data: success ? data : null,
    }
    if (!success) {
      result = Object.assign(result, { message: data })
    }
    return result
  }
}
