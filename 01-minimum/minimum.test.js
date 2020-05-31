// This file is only for viewing

const min = require("./minimum.js");
const { expect } = require("chai");

describe("the min(num1, num2) function", function()
{
    it("should return a finite value", function()
    {
        let submittedSolution = min(1, 2);
        expect(submittedSolution, "the output is not a finite number").to.be.finite;
    });

    it("should return the greater value of the two parameters", function()
    {
        let submittedSolution = min(0, 10);
        expect(submittedSolution, "the output is not the greater of the two parameters").to.equal(0);
    });

    it("should pass auxillary test cases", function()
    {
        let auxillaryNums1 = [-10, -5, 0, 5, 10]
        let auxillaryNums2 = [-5, 0, 5, 10, 10]
        let submittedSolution = min;
        expect(submittedSolution(auxillaryNums1[0], auxillaryNums2[0])).to.equal(-10);
        expect(submittedSolution(auxillaryNums1[1], auxillaryNums2[1])).to.equal(-5);
        expect(submittedSolution(auxillaryNums1[2], auxillaryNums2[2])).to.equal(0);
        expect(submittedSolution(auxillaryNums1[3], auxillaryNums2[3])).to.equal(5);
        expect(submittedSolution(auxillaryNums1[4], auxillaryNums2[4])).to.equal(10);
    });
});