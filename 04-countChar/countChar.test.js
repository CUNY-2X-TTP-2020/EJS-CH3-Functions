// This file is only for viewing

const countChar = require("./countChar.js");
const { expect } = require("chai");

describe("the countChar(word, char) function", function()
{
    it("should return a finite value", function()
    {
        let submittedSolution = countChar("test", "t");
        expect(submittedSolution, "the output is not a finite number").to.be.finite;
    });

    it("should return a value that indicates the total number of specified characters in the input string", function()
    {
        let submittedSolution = countChar("banana", "n");
        expect(submittedSolution, "the output does not reflect an accurate amount of specified characters").to.equal(2);
    });

    it("should pass auxillary test cases", function()
    {
        let auxillaryWords = ["engine", "fruit", "egg", "butter", "carry"];
        let auxillaryChars = ["e", "f", "g", "t", "r"];
        let submittedSolution = countChar;
        expect(submittedSolution(auxillaryWords[0], auxillaryChars[0])).to.equal(2);
        expect(submittedSolution(auxillaryWords[1], auxillaryChars[1])).to.equal(1);
        expect(submittedSolution(auxillaryWords[2], auxillaryChars[2])).to.equal(2);
        expect(submittedSolution(auxillaryWords[3], auxillaryChars[3])).to.equal(2);
        expect(submittedSolution(auxillaryWords[4], auxillaryChars[4])).to.equal(2);
    });
});