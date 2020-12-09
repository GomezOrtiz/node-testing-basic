const {
  getAllEndpoint,
  getOneEndpoint,
  createEndpoint,
} = require("../src/api");
const coastersService = require("../src/coaster.service");

const coasters = [
  { id: 1, name: "Coaster 1" },
  { id: 2, name: "Coaster 2" },
];

coastersService.getAll = jest.fn(() => coasters);
coastersService.getOne = jest.fn();
coastersService.create = jest.fn((coaster) => {
  coasters.push({
    id: coasters[coasters.length - 1].id + 1,
    name: coaster.name,
  });
  return "OK";
});

describe("api", () => {

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe("get all endpoint", () => {
    test("should get all coasters", () => {
      const actual = getAllEndpoint();
  
      expect(coastersService.getAll).toHaveBeenCalled()
      expect(actual).toEqual(coasters);
    });
  });
  
  describe("get one endpoint", () => {
    test("should get one coaster by id", () => {
      const req = {
        params: {
          id: 1,
        },
      };
      coastersService.getOne.mockImplementationOnce((id) => coasters[0]);
  
      const actual = getOneEndpoint(req);
  
      expect(coastersService.getOne).toHaveBeenCalledWith(req.params.id)
      expect(actual).toEqual(coasters[0]);
    });
  
    test("should not found a coaster if not exists", () => {
      const req = {
        params: {
          id: 5,
        },
      };
      coastersService.getOne.mockImplementationOnce((id) => {
        throw new Error(`A coaster with id ${id} could not be found`);
      });
  
      expect(() => getOneEndpoint(req)).toThrow(
        "A coaster with id 5 could not be found"
      );
    });
  });
  
  describe("create endpoint", () => {
    test("should create coaster", () => {
      const req = {
        body: {
          name: "New coaster",
        },
      };
  
      const actual = createEndpoint(req);
  
      expect(coastersService.create).toHaveBeenCalledWith({name: req.body.name})
      expect(actual).toBe("OK");
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
})

