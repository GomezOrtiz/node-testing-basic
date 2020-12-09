describe("matchers", () => {
  let actual;

  beforeAll(() => {
    actual = {
      notDefined: undefined,
      isNull: null,
      defined: "Defined",
      truthy: true,
      falsy: false,
      anotherTruthy: "Something true",
      anotherFalsy: "",
      smallNumber: 3,
      bigNumber: 10,
      decimal: 0.5,
      theBestDog: "Popino, clearly",
      toDoList: ["Learn Jest", "Test and API"]
    };
  });

  test("should be the expected", () => {
    expect(actual.notDefined).toBeUndefined();
    expect(actual.notDefined).not.toBeDefined();
    expect(actual.isNull).toBeNull();
    expect(actual.defined).toBeDefined();
    expect(actual.defined).not.toBeUndefined();
    expect(actual.defined).not.toBeNull();
    expect(actual.truthy).toBeTruthy();
    expect(actual.anotherTruthy).toBeTruthy();
    expect(actual.falsy).toBeFalsy();
    expect(actual.anotherFalsy).toBeFalsy();
    expect(actual.smallNumber).toBeLessThan(5);
    expect(actual.bigNumber).toBeGreaterThan(5);

    // For floating point equality, use toBeCloseTo instead of toEqual, 
    //because you don't want a test to depend on a tiny rounding error.
    expect(actual.decimal).toBeCloseTo(0.5); 

    expect(actual.theBestDog).toMatch(/Popino/)
    expect(actual.toDoList).toContain("Learn Jest")
    expect(actual.toDoList).not.toContain("Procrastinate")
  });
});
