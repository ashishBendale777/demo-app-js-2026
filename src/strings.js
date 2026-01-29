// Strings Manipulation
let city = "Jalgaon is nice city"
// console.log(typeof(typeof(city)))
// console.log(typeof(typeof(age)))
console.log(city.length)
console.log(city[0])
console.log(city[3])

// for (let index = 0; index < city.length ; index++) {
//     console.log(city[index])    
// }

let friendsNams = ["Ashish", "Suraj", "Satish", "Pawan"]
for (let index = 0; index < friendsNams.length; index++) {
    let name = friendsNams[index]
    if (name[name.length - 1] == 'j' ||
        name[name.length - 1] == 'a' ||
        name[name.length - 1] == 'j'
    ) {
        console.log(name)
    }

}