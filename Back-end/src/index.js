const express = require('express');
const routes = require('./routes/routes');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/tasks', routes);


app.listen(PORT, () => console.log(`ouvindo porta ${PORT}`));

module.exports = app;