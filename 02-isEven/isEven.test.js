// This file is only for viewing

const isEven = require("./isEven.js");
const { expect } = require("chai");

describe("the isEven(num) function", function()
{
    it("should return a boolean value", function()
    {
        let submittedSolution = isEven(10);
        expect(submittedSolution, "the output is not a boolean value").to.be.a("boolean");
    });

    it("should return true if the input `num` is even", function()
    {
        let submittedSolution = isEven(4);
        expect(submittedSolution).to.be.true;
    });

    it("should return false if the input `num` is not even", function()
    {
        let submittedSolution = isEven(3);
        expect(submittedSolution).to.be.false;
    })

    it("should pass auxillary test cases", function()
    {
        let submittedSolution = isEven;
        expect(submittedSolution(1)).to.be.false;
        expect(submittedSolution(2)).to.be.true;
        expect(submittedSolution(-2)).to.be.true;
        expect(submittedSolution(0)).to.be.true;
        expect(submittedSolution(-3)).to.be.false;
    })
});