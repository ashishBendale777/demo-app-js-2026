//banking example
let balance = 12000
let choice;
let amount;

choice = 2
switch (choice) {
    case 1:
        //deposite
        amount = 1200
        balance += amount
        console.log("Deposite Successfull");
        break;
    case 2:
        //wuthdrawal
        amount = 100
        balance -= amount
        console.log("Withdrawal Successfull");
        console.log("After Withdrawal"+balance);
        break;
    case 3:
        //checck balance
        console.log("Balance Is" + balance);
        break;
    default:
        console.log("Invakid Chouce");
        break;
}