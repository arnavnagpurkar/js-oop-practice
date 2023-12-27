class BankAccount {
    constructor(accnum, balance) {
        this.accnum = accnum;
        this.balance = balance;
    }

    details() {
        return `Balance for Acc: ${this.accnum} is ${this.balance}`
    }

    deposit(value) {
        this.balance += value;
        console.log(`Deposited ${value}`)
        console.log(this.details())
    }

    withdraw(value) {
        this.balance -= value;
        console.log(`Withdrawed ${value}`)
        console.log(this.details())
    }

}

let acc1 = new BankAccount(102345, 600)
console.log(`Account 1 Details:`)
console.log(acc1.details())

acc1.withdraw(300)
acc1.deposit(600)


let acc2 = new BankAccount(1065345, 125600)
console.log(`Account 2 Details:`)
console.log(acc2.details())

acc2.withdraw(33300)
acc2.deposit(455600)