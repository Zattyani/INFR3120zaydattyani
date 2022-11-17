let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect with assignment model

let Assignment = require('../models/assignment');
let assignmentController = require('../controller/assignment');
// CRUD Operations:

//read operation
//get route for the assignment list

router.get('/', assignmentController.displayAssignmentList);
module.exports = router;

// Add Operation

// Get route for displaying the add page(Create operation)
router.get('/add',assignmentController.displayAddPage);

// Post route for processing the add page(Create operation)
router.post('/add',assignmentController.processAddPage);

// Edit operation

// Get route for displaying the edit operation(Update operation)
router.get('/edit/:id',assignmentController.displayEditPage);

// Post route for displaying the edit operation(Update operation)
router.post('/edit/:id',assignmentController.processEditPage);

// Delete operation
// Get to perform delete operation

router.get('/delete/:id',assignmentController.performDelete);