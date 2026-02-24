///closute functions

function myFunc() {
    let message = "Hi..."

    return function inner() {
        console.log(message)
    }
}

let printMessage = myFunc()
//call the inner function
printMessage()