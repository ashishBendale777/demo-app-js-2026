let sentence = "I love my bharat"
let words = sentence.split(" ")
// let lastWord = words[words.length - 1]
// let capWord = lastWord.replace(lastWord.charAt(0), lastWord.charAt(0).toUpperCase())
// console.log(sentence)
// let nSentence = sentence.replace(lastWord, capWord)
// console.log(nSentence)
// console.log(words)

console.log(sentence)

for (let index = 0; index < words.length; index++) {
    words[index] = words[index].replace(words[index].charAt(0),
        words[index].charAt(0).toUpperCase())
}

// console.log(words)
let newSentence = words.join(" ")
console.log(newSentence)