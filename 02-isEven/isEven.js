/*
    Define a recursive function `isEven` that takes in a single parameter (a positive, whole number) and 
    returns a Boolean. True if even, false otherwise.
*/
function isEven(num)
{
    if(num === 0) return true;
    else if(num === 1) return false;

    if(num > 0) return isEven(num - 2);
    else if(num < 0) return isEven(num + 2);
}

module.exports = isEven;