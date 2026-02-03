///function is a block of code 
// you can resuse that in anywhere

//call a function
showMessage()

//define a function
function showMessage() {
    //body
    console.log("Hello...")
}

// displayMessage()

// another way of defining function
let displayMessage = () => {
    //body
    console.log("Hello...Hi")
}

displayMessage()

//functions with params
let addNums = (a, b) => {
    let ans = a + b
    console.log(ans)
}

addNums(32, 54)
addNums(12, 56)
addNums(65, 523)

//check pallindrome
let checkPallindrom = (str) => {

}

checkPallindrom("pop")
checkPallindrom("hi")