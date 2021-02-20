// Export your class here as module.exports = MyClass
const Account = require('./Account')
class BusinessAccount extends Account {

    constructor(name, balance, creditLimit, sepaPermission) {
        super(name, balance, creditLimit);
        this.dailyLimit = 20000
        this.sepaPermission = sepaPermission;

    }
    makeDeposit(amount){
        if(amount > 0 ){
            this.balance = this.balance + amount;
        }
    }
    makeWithdrawal(amount){
        if (amount < this.balance + this.creditLimit && amount < this.dailyLimit ){
            this.balance = this.balance - amount
        }
    }
    sepaInvoice(amount){
        if (this.sepaPermission === true && amount > 0){
            const transactionCost = 0.99
            this.balance = this.balance + amount * transactionCost
        }
    }

}
// Amount passed to sepaInvoice should be added to balance minus 1% transaction cost
module.exports = BusinessAccount;
