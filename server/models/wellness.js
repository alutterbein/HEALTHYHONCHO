const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const wellnessSchema = new Schema({
  caloriesBenchmark: {
    type: Boolean,
    required: false,
  },
  proteinBenchmark: {
    type: Boolean,
    required: false,
  },
  fiberBenchmark: {
    type: Boolean,
    required: false,
  },
  fatsBenchmark: {
    type: Boolean,
    required: false,
  },
  carbohydratesBenchmark: {
    type: Boolean,
    required: false,
  },
  hourExercise: {
    type: Boolean,
    required: false,
  },
  halfHourExercise: {
    type: Boolean,
    required: false,
  },
  cardio: {
    type: Boolean,
    required: false,
  },
  weightlift: {
    type: Boolean,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  

});

const Wellness = model('Wellness', wellnessSchema);

module.exports = Wellness;

  