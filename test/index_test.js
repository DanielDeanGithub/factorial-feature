var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns 120 when you pass in 5', () => {
      // Setup
      const inputNumber = 5;
      const expectedResult = 120;
      
      // Exercise
      const actualResult = Calculate.factorial(inputNumber);

      // Verify
      assert.equal(actualResult, expectedResult);      
    }); 

    it('returns 6 when you pass in 3', () => {
      // Setup
      const inputNumber = 3;
      const expectedResult = 6;
      
      // Exercise
      const actualResult = Calculate.factorial(inputNumber);

      // Verify
      assert.equal(actualResult, expectedResult);      
    });

    it('returns 1 when you pass in 0', () => {
      // Setup
      const inputNumber = 0;
      const expectedResult = 1;
      
      // Exercise
      const actualResult = Calculate.factorial(inputNumber);

      // Verify
      assert.equal(actualResult, expectedResult);      
    });

    it("throws an error if input type isn't an int", () => {
      
      assert.throws(() => {
        Calculate.factorial("a");
      }, RangeError);
    });
  });
});