// step 1 collectIngrediants
let collectIngrediants = (next) => {
    console.log("Collecting ingtrdiants....")
    setTimeout(() => {
        console.log("Collected..!")
        next()
    }, 2000)
}

//step 2 betterPreparation
let betterPreperation = (next) => {
    console.log("Preparing better...!")
    setTimeout(() => {
        console.log("Prapared.!")
        next()
    }, 2000)
}

//step 3 dpBacking
let doBacking = (next) => {
    console.log("Backing Cake....")
    setTimeout(() => {
        console.log("Backing Done..!")
        next()
    }, 2000)
}

// step 4 doIcing
let doIcing = () => {
    console.log("Icing started...")
    setTimeout(() => {
        console.log("Icing Done")
    }, 2000)
}

//step 5 decorateCake
let decorateCake = () => {
    console.log("Decorating cake..")
    setTimeout(() => {
        console.log("Decoration Done..!")
    }, 2000)
}

/// start making cake
collectIngrediants(() => {
    betterPreperation(()=>{
        doBacking(()=>{
            doIcing()
        })
    })
})