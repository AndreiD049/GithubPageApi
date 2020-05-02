const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const projectRouter = require('./controllers/projects');
const experienceRouter = require('./controllers/experiences');
const config = require('./utils/config');
const {Experience} = require('./models/experiences');
const middleware = require('./utils/middleware');

const app = express();

// connect to the database
mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then(() => {
  console.log('Successfully connected to MONGODB');
}).catch((error) => {
  console.error(`Error connecting to MONGODB - ${error.message}`);
});

app.use(bodyParser.json());
app.use(cors());

// Routers
app.use('/api/projects', projectRouter);
app.use('/api/experiences', experienceRouter);

// Error handler
app.use(middleware.errorHandler);

module.exports = app;
