const count = (from, to) => {
  const result = [];

  for (i = from; i <= to; i++) {
    result.push(i);
  }

  return result;
};

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
