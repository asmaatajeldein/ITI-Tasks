class Account {
    constructor(accNo = 0, balance = 0) {
        this.accNo = accNo;
        this.balance = balance;
    }
    debitAmount() { }
    ;
    creditAmount() { }
    ;
    getBalance() { }
    ;
}
class CurrentAccount extends Account {
    constructor(_accNo, _balance, interestRate = 0) {
        super(_accNo, _balance);
        this.interestRate = interestRate;
    }
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
}
class SavingAccount extends Account {
    constructor(_accNo, _balance, minBalance = 0) {
        super(_accNo, _balance);
        this.minBalance = minBalance;
    }
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
}
