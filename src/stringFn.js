let name = "Ashish"

console.log(name.toUpperCase())
console.log(name.toLowerCase())

let newStr = name.concat(" Hi..")
console.log(newStr)
console.log(name)
console.log(name.startsWith('a'))
console.log(name.endsWith('a'))

console.log(name[0])
console.log(name.charAt(5))

let nStr = name.replace("A","S")
console.log(nStr)

console.log(name.indexOf("h"))
console.log(name.lastIndexOf("h"))

let sentence= "I am a boy"
console.log(sentence.substr(1,3))

let words = sentence.split(" ")
console.log(words[3])
console.log(words)