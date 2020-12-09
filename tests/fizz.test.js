const { count } = require("../src/fizz");
const { fizzBuzz } = require("../src/fizz");

describe("count", () => {
  let actual;

  beforeAll(() => {
    actual = count(1, 100);
  });

  test("should go from 1 to 100", () => {
    expect(Array.isArray(actual)).toBeTruthy();
    expect(actual.length).toBe(100);
    expect(actual[0]).toBe(1);
    expect(actual[actual.length - 1]).toBe(100);
  });
});

describe("fizzbuzz", () => {
  let actual;

  beforeAll(() => {
    actual = fizzBuzz(1, 15);
  });

  test("should push Fizz for multiples of three", () => {
    expect(actual.filter((el) => el === "Fizz").length).toBe(4);
  });

  test("should push Buzz for multiples of five", () => {
    expect(actual.filter((el) => el === "Buzz").length).toBe(2);
  });

  test("should push FizzBuzz for multiples of fifteen", () => {
    expect(actual.filter((el) => el === "FizzBuzz").length).toBe(1);
  });

  test("should push FizzBuzz for multiples of fifteen", () => {
    expect(actual.filter((el) => typeof el === "number").length).toBe(8);
  });
});
