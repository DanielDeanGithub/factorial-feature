var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('test the output of 5! is equal to 120', () => {
      // Setup
      const inputNumber = 5;
      const expectedResult = 120;
      
      // Exercise
      const actualResult = Calculate.factorial(inputNumber);

      // Verify
      assert.equal(actualResult, expectedResult);      
    }); 

    it('test the output of 3! is equal to 6', () => {
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