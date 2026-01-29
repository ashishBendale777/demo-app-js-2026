

// 1 =====
// 2 =====
// 3 =====
// 4 =====
// 5 =====

let rows = 20
let cols = 10

//outer loop - rows
for (let i = 1; i <= rows; i++) {
    let row = i + ""
    for (let j = 1; j <= cols; j++) {
        if (i == 1 || i == rows || j == 1 || j === cols) {
            row += "="
        } else {
            row += " "
        }
    }
    console.log(row)
}