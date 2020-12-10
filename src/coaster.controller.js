const coastersService = require("./coaster.service");

const getAllEndpoint = () => ({ code: 200, body: coastersService.getAll() });
const createEndpoint = (req) => {
  coastersService.create({ name: req.body.name });
  return { code: 201, body: null };
};

module.exports = {
  getAllEndpoint,
  createEndpoint,
};
