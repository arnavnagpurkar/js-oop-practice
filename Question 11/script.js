class BankAccount {
    constructor(accnum, accholderName, balance) {
        this.accnum = accnum;
        this.accholderName = accholderName;
        this.balance = balance;
    }

    deposit(value) {
        this.balance += value;
        console.log(`Deposited ${value} in ${this.accnum}`);
    }

    withdraw(value) {
        if (value > this.balance) {
            throw new Error(`Insuffienct balance to withdraw ${value} in ${this.accnum}`);
        }
        else {
            this.balance -= value;
            console.log(`Withdrawed ${value} from ${this.accnum}`);
        }
    }

    transfer(amt, recipient) {
        if (amt > this.balance) {
            throw new Error(`Insufficient balance to transfer ${amt} from ${this.accnum}`);
        }

        if (!(recipient instanceof BankAccount)) {
            throw new Error('Invalid recipient account');
        }


        try {
            this.balance -= amt;
            recipient.deposit(amt);
            console.log(`Transferred ${amt} from ${this.accnum} to ${recipient.accnum}`);
        } catch (error) {
            throw new Error(`Transfer failed. Error: ${error.message}`);
        }
    }
}

let bankacc1 = new BankAccount(123792564, "Arnav Nagpurkar", 50000);
let bankacc2 = new BankAccount(165161919, "Haris Ali Khan", 16461);

bankacc1.withdraw(520);
bankacc2.deposit(1200);
bankacc2.transfer(1600, bankacc1);
console.log(`Balance of Bank Account 1: ${bankacc1.balance}`);
console.log(`Balance of Bank Account 2: ${bankacc2.balance}`);