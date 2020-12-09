const count = (from, to) => {
  const result = [];

  for (i = from; i <= to; i++) {
    result.push(i);
  }

  return result;
};

const fizzBuzz = (from, to) => {
  const result = [];

  for (i = from; i <= to; i++) {
    if(i % 15 === 0) {
      result.push("FizzBuzz")
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

module.exports = { count, fizzBuzz };
