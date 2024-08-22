const ExampleModel = require('../models/example.model');
const { successMessage, errorMessage } = require('../resources/messages');

const getExample = async (req, res) => {
    try {
        const examples = await ExampleModel.findAll();
        res.status(200).json({
            message: successMessage.exampleFetched,
            data: examples,
        });
    } catch (error) {
        res.status(500).json({ message: errorMessage.fetchError });
    }
};

const exampleController = {
    getExample,
};

module.exports = exampleController;
