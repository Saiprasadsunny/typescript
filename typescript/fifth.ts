//Rest Parameters
let addNumbers = function(...nums: number[]) {
    let p;
    let sum: number = 0;
    for (p = 0; p < nums.length; p++) {
        sum = sum + nums[p];
    }
    return sum;
}

console.log(addNumbers(1, 2));
console.log(addNumbers(1, 2, 3));
console.log(addNumbers(1, 12, 10, 18, 17));
