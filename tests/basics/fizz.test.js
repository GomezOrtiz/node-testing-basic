const fizzBuzz = (from, to) => {
  const result = [];

  for (i = from; i <= to; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result;
};

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
