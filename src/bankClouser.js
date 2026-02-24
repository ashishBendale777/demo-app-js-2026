//bank system using closour

let createAccount = (initialBalance) => {
    let balance = initialBalance

    return {
        deposite: (amount) => {
            balance += amount
            console.log("Balance", balance)
        },
        withdraw: (amount) => {
            balance -= amount
            console.log("Balance", balance)
        },
        checkBalance: () => {
            console.log("Balance", balance)
        }
    }
}

///usage of function
let account = createAccount(12000)
account.checkBalance()
account.deposite(200)
account.withdraw(300)