let mongoose = require('mongoose');

// Create an assignment model

let assignmentModel = mongoose.Schema({
    Name: String,
    Course: String,
    DueDate: String,
    Description: String,
    },
    {
        collection: "assignment"
    }
);
module.exports = mongoose.model('assignment', assignmentModel);