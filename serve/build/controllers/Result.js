module.exports = class Result {
    constructor(success, data, code) {
        const result = {
            success,
            code: code ? code : (success ? 1 : 0),
            data: success ? data : null,
            [success ? 'data' : 'message']: data,
        };
        return result;
    }
};
//# sourceMappingURL=Result.js.map