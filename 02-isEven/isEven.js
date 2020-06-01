/*
    Define a recursive function `isEven` that takes in a single parameter (a positive, whole number) and 
    returns a Boolean. True if even, false otherwise.
*/
function isEven(num)
{
    return num % 2 === 0;
}

module.exports = isEven;