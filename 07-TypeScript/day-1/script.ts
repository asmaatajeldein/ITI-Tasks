class Account {
    constructor(public accNo:number=0, public balance:number=0){}

    debitAmount(){};
    creditAmount(){};
    getBalance(){};
}

interface IAccount {
    dateOfOpening: Date;
    addCustomer();
    removeCustomer();
}

class CurrentAccount extends Account implements IAccount {
    constructor(_accNo, _balance, public interestRate:number=0) {
        super(_accNo, _balance);
    }

    dateOfOpening: Date;
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
}

class SavingAccount extends Account implements IAccount {
    constructor(_accNo, _balance, public minBalance:number=0) {
        super(_accNo, _balance);
    }
    dateOfOpening: Date;
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
}
