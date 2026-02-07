//call back functions
//timmer fuctions 
//setTimeOut() / setInterval()


//define a function
//task 1
let add = (a, b, next) => {
    let ans;
    console.log("Calculating......")
    setTimeout(() => {
        ans = a + b
        console.log("Calcilation Done!")
        next(ans)
    }, 2000)
}

//task 2
let checkEvenOdd = (num) => {
    //use ternary operator when you want to do
    //less task if condition true or false
    let message = num % 2 == 0 ? `${num} is Even` : `${num} is Odd`
    console.log(message)
    console.log("Checking done!")
}

add(12, 32, (ans) => {
    checkEvenOdd(ans)
})