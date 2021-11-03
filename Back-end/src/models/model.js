const connection = require('./connection');

const getAll = async () => {
  const db = await connection();
  const query = await db.collection('tasks').find().toArray();
  return query;  
}

module.exports = {
  getAll,
}