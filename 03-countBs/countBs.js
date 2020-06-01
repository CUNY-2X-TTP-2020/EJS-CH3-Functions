/*
    Write a function `countBs` that takes a string as its only argument and 
    returns a number that indicates how many uppercase "B" characters there are in the string.
*/
function countBs(word)
{
    return word.split("").reduce((count, currentLetter) =>
    {
        currentLetter === 'B' ? count++ : count;
        return count;
    }, 0);
}

module.exports = countBs;