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
  });
});