const ExampleModel = require('../models/example.model');

exports.fetchAllExamples = async () => {
  try {
    return await ExampleModel.find();
  } catch (error) {
    throw new Error('Error fetching examples');
  }
};
