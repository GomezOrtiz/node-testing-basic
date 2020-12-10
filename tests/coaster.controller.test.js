const { getAllEndpoint, createEndpoint } = require("../src/coaster.controller");
const coastersService = require("../src/coaster.service");

// MOCKS
const coasters = [
  { id: 1, name: "Coaster 1" },
  { id: 2, name: "Coaster 2" },
];

coastersService.getAll = jest.fn(() => coasters);
coastersService.create = jest.fn((coaster) => {
  coasters.push({
    id: coasters[coasters.length - 1].id + 1,
    name: coaster.name,
  });
});

// TESTS
describe("api", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("get all endpoint", () => {
    test("should get all coasters", () => {
      const res = getAllEndpoint();

      expect(coastersService.getAll).toHaveBeenCalled();
      expect(res.code).toEqual(200);
      expect(res.body).toEqual(coasters);
    });
  });

  describe("create endpoint", () => {
    test("should create coaster", () => {
      const req = {
        body: {
          name: "New coaster",
        },
      };

      const res = createEndpoint(req);

      expect(coastersService.create).toHaveBeenCalledWith({
        name: req.body.name,
      });
      expect(res.code).toBe(201);
      expect(res.body).toBeNull();
      expect(coasters.length).toBe(3);
    });

    test("should fail create coaster when name is repeated", () => {
      const req = {
        body: {
          name: "Repeated name",
        },
      };
      coastersService.create.mockImplementationOnce((coaster) => {
        throw new Error(`A coaster with name ${coaster.name} already exists`);
      });

      expect(() => createEndpoint(req)).toThrow(
        "A coaster with name Repeated name already exists"
      );
    });
  });
});
