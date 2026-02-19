

// step 1 collectIngrediants
let collectIngrediants = (ingrediants) => {
    let cakeData = {}
    return new Promise((resolve, reject) => {
        console.log("Collecting ingtrdiants....")
        setTimeout(() => {
            if (ingrediants.length == 0) {
                reject(new Error("Please choose ingrediants."))
            }
            cakeData.ingrediants = ingrediants
            resolve(cakeData)
            console.log("Collected..!")
        }, 2000)
    })

}

//step 2 betterPreparation
let betterPreperation = (ck, flavour) => {
    return new Promise((resolve, reject) => {
        console.log("Preparing better...!")
        setTimeout(() => {
            if (flavour == "") {
                reject("Please choose flavour")
            }
            ck.flavour = flavour
            resolve(ck)
            console.log("Prapared.!")
        }, 2000)
    })

}

//step 3 dpBacking
let doBacking = (ck1, time, temprature) => {
    return new Promise((resolve, reject) => {
        console.log("Backing Cake....")
        setTimeout(() => {
            if (time == 0 || temprature == 0) {
                reject("Please Set time and temp.")
            }
            ck1.isBacked = true
            resolve(ck1)
            console.log("Backing Done..!")
        }, 2000)
    })


}

// step 4 doIcing
let doIcing = (ck2, next) => {
    console.log("Icing started...")
    ck2.iIcingDone = true
    setTimeout(() => {
        console.log("Icing Done")
        next(ck2)
    }, 2000)
}

//step 5 decorateCake
let decorateCake = (ck3, next) => {
    console.log("Decorating cake..")
    ck3.isDecorated = true
    setTimeout(() => {
        console.log("Decoration Done..!")
        next(ck3)
    }, 2000)
}

/// start making cake
collectIngrediants(["floour", "sugar", "soda", "ghee"])
    .then((cakeresult) => {
        betterPreperation(cakeresult, "choco")
            .then((cakRes) => {
                doBacking(cakRes, 0, 0)
                    .then((ckRes) => {
                        console.log(ckRes)
                        console.log("next do....")
                    })
            })
    }).catch((err) => {
        console.log(err)
    });