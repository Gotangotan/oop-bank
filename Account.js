// Export your class here as module.exports = MyClass
class Account{
constructor(name, balance, creditLimit) {
    this.name = name;
    this.balance = balance;
    this.creditLimit = creditLimit;
}
    makeDeposit(Account){
    if (Account > 0 ){
        this.balance = this.balance + Account
        }
    }
    makeWithdrawal(amount)
    {
        // Wat is huidige balance?
        // console.log("BALANCE",this.balance)
        // Welke bedrag moet worden afgeschreven?
        // console.log("Wat moet er worden afgeschreven", amount)
        // Log nieuwe balance
        if (amount < this.balance +  this.creditLimit && amount < 5000){
            this.balance = this.balance - amount }
    }
}
module.exports = Account;