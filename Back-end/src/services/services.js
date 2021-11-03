const model = require('../models/model');

const getAll = async () => await model.getAll();

module.exports = {
  getAll,
}