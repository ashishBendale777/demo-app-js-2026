let str = "malayalam"
let st1r2 = "pop"
let str3 = "hi"
let str5 = "navajeevan"

let left = 0
let right = str3.length - 1

let isPallidrom = false

while (left < right) {
    if (str3.charAt(left) != str3.charAt(right)) {
        isPallidrom = false
        break
    }
    left++
    right--
    isPallidrom = true
}

if (isPallidrom) {
    console.log(str3, " is pallimdrom")
} else {
    console.log(str3, " is not pallimdrom")
}