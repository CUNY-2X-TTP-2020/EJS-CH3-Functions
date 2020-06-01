// This file is only for viewing

const countBs = require("./countBs.js");
const { expect } = require("chai");

describe("the countBs(word) function", function()
{
    it("should return a finite value", function()
    {
        let submittedSolution = countBs("ABC");
        expect(submittedSolution, "the output is not a finite number").to.be.finite;
    });

    it("should return a value that indicates the total number of uppercase 'B' characters in the input string", function()
    {
        let submittedSolution = countBs("BBC");
        expect(submittedSolution, "the output does not reflect an accurate amount of 'B' characters").to.equal(2);
    });

    it("should pass auxillary test cases", function()
    {
        let auxillaryTestCases = ["ABC", "bBC", "BBC", "BbBb", "BLUBBER"];
        let submittedSolution = countBs;
        expect(submittedSolution(auxillaryTestCases[0])).to.equal(1);
        expect(submittedSolution(auxillaryTestCases[1])).to.equal(1);
        expect(submittedSolution(auxillaryTestCases[2])).to.equal(2);
        expect(submittedSolution(auxillaryTestCases[3])).to.equal(2);
        expect(submittedSolution(auxillaryTestCases[4])).to.equal(3);
    });
});