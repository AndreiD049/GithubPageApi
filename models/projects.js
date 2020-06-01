const mongoose = require('mongoose');
const { toJSON } = require('../utils/dbutils');

const projectsSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdDate: Date,
  links: [String],
  image: String,
  languages: {
    type: [String],
    required: true,
  },
});

// toJSON method
projectsSchema.set('toJSON', {
  transform: toJSON,
});

const Project = mongoose.model('Project', projectsSchema);

module.exports = Project;
