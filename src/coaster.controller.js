const coastersService = require("./coaster.service");

const getAllEndpoint = () => ({ code: 200, body: coastersService.getAll() });
const getOneEndpoint = (req) => ({
  code: 200,
  body: coastersService.getOne(req.params.id),
});
const createEndpoint = (req) => {
  coastersService.create({ name: req.body.name });
  return { code: 201, body: null };
};

module.exports = {
  getAllEndpoint,
  getOneEndpoint,
  createEndpoint,
};
