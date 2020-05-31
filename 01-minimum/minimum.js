/*
    Write a function `min` that takes two arguments and returns their minimum

    console.log(min(0, 10)); -> 0
    console.log(min(0, -10)); -> -10
*/

function min(num1, num2)
{
    return num1 > num2 ? num2 : num1;
}

module.exports = min;