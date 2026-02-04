let accNo = 12
let balance = 3400


let printMessage = (acNo, amt) => {
    let message = `Transaction done on Acc:${acNo} of Rs:${amt}`
    console.log(message)
}

let withdrawal = (amount) => {
    balance -= amount
    printMessage(accNo,amount)
}

let deposite = (amount) => {
    balance += amount
    printMessage(accNo,amount)
}

//call a functions
deposite(1200)
withdrawal(100)
withdrawal(200)
withdrawal(400)
deposite(3000)