
let cakeData = {}

// step 1 collectIngrediants
let collectIngrediants = (next) => {
    console.log("Collecting ingtrdiants....")
    cakeData.ingrediants = ["floor", "sugar", "soda"]
    setTimeout(() => {
        console.log("Collected..!")
        next(cakeData)
    }, 2000)
}

//step 2 betterPreparation
let betterPreperation = (ck, next) => {
    console.log("Preparing better...!")
    ck.flavour = "Chocolate"
    setTimeout(() => {
        console.log("Prapared.!")
        next(ck)
    }, 2000)
}

//step 3 dpBacking
let doBacking = (ck1, next) => {
    console.log("Backing Cake....")
    ck1.isBaked = true
    setTimeout(() => {
        console.log("Backing Done..!")
        next(ck1)
    }, 2000)
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
collectIngrediants((c1) => {
    console.log(c1)
    betterPreperation(c1, (c2) => {
        console.log(c2)
        doBacking(c2, (c3) => {
            console.log(c3)
            doIcing(c3, (c4) => {
                decorateCake(c4, (c5) => {
                    console.log(cakeData)
                    console.log("CAKE IS READY")
                })
            })
        })
    })
})