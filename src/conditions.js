//logical && || ! operators
let c = 43
let d = 23
console.log(c > 30 || d > 30);
console.log(c > 30 && d > 30);
console.log(c > 30);
console.log(d % 4 == 0);
console.log(c > 60 && c < 70);

if (c % 2 == 0) {
    console.log(c + " is Even");
} else {
    console.log(c + " is Odd");
}

let marks = 32
if (marks >= 85) {
    console.log("A Grade");
} else if (marks >= 70 && marks < 85) {
    console.log("B Grade");
} else if (marks >= 55 && marks < 70) {
    console.log("C Grade");
} else if (marks >= 40 && marks < 55) {
    console.log("D Grade");
} else {
    console.log("fAIL");
}

let age = 53
if (!age < 18) {
    console.log("Adult");
}else{
    console.log("Minor");
}