const coastersService = require('./coaster.service');

const getAllEndpoint = () => coastersService.getAll();
const getOneEndpoint = (req) => coastersService.getOne(req.params.id);
const createEndpoint = (req) => coastersService.create({ name: req.body.name });

module.exports = {
  getAllEndpoint,
  getOneEndpoint,
  createEndpoint,
};
