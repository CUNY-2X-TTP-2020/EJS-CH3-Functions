/*
    Write a function called `countChar` that behaves like `countBs`, except it 
    takes a second argument that indicates the character that is to be counted.
*/
function countChar(word, char)
{
    return word.split("").reduce((count, currentLetter) =>
    {
        currentLetter === char ? count++ : count;
        return count;
    }, 0);
}

module.exports = countChar;