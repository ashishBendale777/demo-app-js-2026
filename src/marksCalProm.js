//define a promise

let calculateResult = (
    maths, english, bio, phycis, cpp
) => {
    return new Promise((resolve, reject) => {
        console.log("Generating Result..")
        setTimeout(() => {
            if ((maths < 0 || maths > 100) ||
                (bio < 0 || bio > 100) ||
                (english < 0 || english > 100) ||
                (cpp < 0 || cpp > 100) ||
                (phycis < 0 || phycis > 100)) {
                reject(new Error("Invalid Marks"))
            }
            let total = maths + bio + phycis + english + cpp
            let percentage = total * 100 / 500
            let result = ""
            if (percentage > 80) {
                result = "Pass with A grade"
            }
            resolve(result)
        }, 3000)
    })
}

calculateResult(64, 76, 23, 54, 70).then((result) => {
    console.log(result)
})
    .catch((error) => console.log(error))