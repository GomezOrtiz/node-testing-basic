const sum = (a, b) => {
  return a + b;
};

test("sum 1 + 2 should be equal to 3", () => {
  expect(sum(1, 2)).toBe(3);
});
