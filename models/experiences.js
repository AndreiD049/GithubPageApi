const mongoose = require('mongoose');
const { toJSON } = require('../utils/dbutils');

const validTypes = ['work', 'study', 'volunteering']

const experienceSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: validTypes,
  },
  title: {
    type: String,
    unique: true,
  },
  description: String,
  startOn: Date,
  endOn: Date,
  image: String,
});

experienceSchema.set('toJSON', {
  transform: toJSON,
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = {
  Experience,
  validTypes,
};
