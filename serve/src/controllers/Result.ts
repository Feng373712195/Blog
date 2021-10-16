module.exports = class Result {
  constructor (success:boolean, data:any, code:number) {
    const result = {
      success,
      code: code ? code : (success ? 1 : 0),
      data: success ? data : null,
      [success ? 'data' : 'message']: data,
    }
    return result
  }
}
