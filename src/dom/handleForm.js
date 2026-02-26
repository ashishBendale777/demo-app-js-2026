//Feom manipulation
let iNum1 = document.getElementById("num1")
let iNum2 = document.getElementById("num2")
let btnAdd = document.getElementById("btnAdd")
let hAns = document.getElementById("ans")

btnAdd.addEventListener("click", () => {
    let n1 = Number(iNum1.value)
    let n2 = Number(iNum2.value)
    console.log(typeof (n1))
    hAns.innerText = n1 + n2
})