const services = require('../services/services');

const getAll = async (req, res) => {
  const tasks = await services.getAll();
  return res.status(200).json(tasks);
};

module.exports = {
  getAll,
}