const express = require('express');
const studentCartRoute = express.Router();
var ObjectId = require('mongodb').ObjectID;

// Cart model
let User = require('../models/user/user.model');
let Course = require('../models/course/course.model')
let Cart = require('../models/student-cart.model');



//Get All coursers of a user
studentCartRoute.route('/:userID').get(async (req, res) => {
  try{
      const user= await User.findById(req.params.userID).exec();
      if(!user){
        res.json({error:"invalid user id"})
      }
      else{
        res.json(user.cart);
      }
 }catch(err){
   res.json({error:err.message})
 }

})

// Add course to user cart
studentCartRoute.route('/:userID/:courseID').post(async (req, res) => {
  try{
    const user= await User.findById(req.params.userID).exec();
      if(!user)
        res.json({error:"invalid user id"})
      else{
        const course = await Course.findById(req.params.courseID).exec()
        if(!course)
          res.json({error:"invalid course id"})
        else{
          user.cart.push(course._id);
          user.save() 
          res.json(course);
        }
      }
  }catch(err){
    res.json({error:err.message})
  }
})

// delete a course in the cart
studentCartRoute.route('/:userID/:courseID').delete(async (req, res, next) => {
  try{
    const user=await User.findById(req.params.userID)
    if(!user)
     res.json({error:"invalid user id"})
    else{
      const index=user.cart.indexOf(req.params.courseID);
      if(index==-1)
        res.json({error:"course not found"})
      else{
        user.cart=user.cart.filter((id)=>id!=req.params.courseID);
        await user.save();
        res.json(user.cart);
      }
    }
  }catch(err){
    res.json({error:err.message})
  }
  })

studentCartRoute.route('/:user_id').delete(async (req, res) => {
  try{
    const user=await User.findById(req.params.userID)
    if(!user)
     res.json({error:"invalid user id"})
    else{
      user.cart=[];
      await user.save();
      res.json(user.cart);
    }
  }catch(err){
    res.json({error:err.message})
  }
  })

module.exports = studentCartRoute;

