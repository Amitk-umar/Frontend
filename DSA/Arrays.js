//Remember:
//Time complexity,calculate in worst case scenerio
//avoid constants
//avoid lower values


//Problem 1. Two Sum
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            if (nums[i] + nums[j] === target) {
                return [i, j];
            }

        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));



//Problem 2. sum of Array
function sum(...args) {
    // Your implementation
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total = args[i] + total;
        
    }
    return total;
}

//For the purpose of user debugging.
sum(100, 200, 300, 400);

module.exports = sum