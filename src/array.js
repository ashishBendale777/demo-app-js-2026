//array === 
let a = 234
let nums;
//index is use for accessing elements from array
nums = [12, 54, 76, 34, 57, 345, 568, 3245, 47, 657]
console.log(nums[5]);
console.log(nums[8]);
nums[7] = 333

console.log(nums.length);
console.log(nums[nums.length - 1]);
nums[nums.length - 4] = 2222
console.log(nums[nums.length - 1]);

//loop is use for leterating / visiting / showing 
//each element of an array
let count2 = 0
let count5 = 0
let count7 = 0

for (let index = 0; index < nums.length; index++) {
    if (nums[index] % 2 == 0) {
        count2++
        break
    }
    if (nums[index] % 5 == 0) {
        count5++
    }
}

console.log("Count of 2", count2)
console.log("Count of 5", count5)