const Movie=require("../models/Movie")
const mongoose = require("mongoose");
const admin=require("../models/Admin");

const addMovie =async (req,res,next) => {
    const extractedToken = req.headers.authorization.split("")[1];
    
}