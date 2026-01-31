let sentence = "i am software engineer"
let words = sentence.split(" ")
let lastWord = words[words.length - 1]
let capWord = lastWord.replace(lastWord.charAt(0), lastWord.charAt(0).toUpperCase())
console.log(sentence)
let nSentence = sentence.replace(lastWord, capWord)
console.log(nSentence)