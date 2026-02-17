//promises states
//1 pending (waiting)
//2 fullfilled (success)
//3 reject (failure)

//define a promise
let checkAge = (age) => {
    return new Promise((resolve, reject) => {
        console.log("Checking....")
        setTimeout(() => {
            if (age > 18) {
                resolve("Checking Done. You are Eligible.!")
            } else {
                reject(new Error("You are not eligible."))
            }
        }, 3000)
    })
}

//handling a promise
//1 using then....catch functions
checkAge(54).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

//2 using async .... await 