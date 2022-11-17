let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect with assignment model

let Assignment = require('../models/assignment');

// CRUD Operations:

module.exports.displayAssignmentList = (req,res,next)=>{
    Assignment.find((err, assignmentlist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('assignment/list',{
                title:'Assignments',
                AssignmentList: assignmentlist});
        }
    });
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('assignment/add',{title:'Add Assignment'})
};

module.exports.processAddPage = (req,res,next)=>{
    let newAssignment = Assignment({
        "Name":req.body.Name,
        "Course":req.body.Course,
        "DueDate":req.body.DueDate,
        "Description":req.body.Description
    });
    Assignment.create(newAssignment,(err,Assignment) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/assignment-list');
        }
    })
};

module.exports.displayEditPage = (req,res,next)=>{
    let id = req.params.id;
    Assignment.findById(id,(err,assignmentToEdit) => 
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('assignment/edit',{title:'Edit Assignment', assignment:assignmentToEdit})
        }
    });
};

module.exports.processEditPage = (req,res,next) =>
{
    let id = req.params.id;
    let updateAssignment = Assignment({
        "_id": id,
        "Name":req.body.Name,
        "Course":req.body.Course,
        "DueDate":req.body.DueDate,
        "Description":req.body.Description
    });
    Assignment.updateOne({_id:id}, updateAssignment, (err)=>
        {
            if(err)
            {
            console.log(err);
            res.end(err);
            }
        else
        {
            res.redirect('/assignment-list');
        }       
    });
}

module.exports.performDelete = (req,res,next)=>{
    let id = req.params.id;
    Assignment.deleteOne({_id:id},(err) => {
        if(err)
            {
            console.log(err);
            res.end(err);
            }
        else
        {
            res.redirect('/assignment-list');
        }
    }); 
}