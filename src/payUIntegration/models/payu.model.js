export class AuthUserModel {
    constructor(statusCode, message, jwtToken, userName, exp, iat) {
        this.statusCode = statusCode;
        this.message = message;
        this.jwtToken = jwtToken;
        this.userName = userName;
        this.exp = exp;
        this.iat = iat;
    }
}

export class CreateTransactionModel {
    constructor(id, txnid) {
        this.id = id;
        this.txnid = txnid;
    }
}
