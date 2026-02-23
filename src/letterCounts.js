let message = "Javascript is the best programming language"

// {
//     J:1,
//     a:2,
//      v:1,
//      s: 1,
// }
let freqCounts = {}
let letters = message.split("")
console.log(letters)
for (const letter of letters) {
    if (letter != " ") {
        freqCounts[letter] = (freqCounts[letter] || 0) + 1
    }
}

console.log(freqCounts)
for (const key in freqCounts) {
    console.log(key,"-",freqCounts[key])
}