const {sum, positive} = require('../index');

describe("testing math utilities", () => {

  it("return of sum function should equal to sum of the values", () => {
    expect(sum([1, 8, 9, 10])).toEqual(28);
    // if I want to add a message it should match the error message that comes from console
    expect(() => {sum(12)}).toThrowError("vals.forEach is not a function");
  });

  it("positive function should equal to positive values", () => {
    expect(positive([1, 8, -2, -10])).toEqual([1, 8]);
  });
});