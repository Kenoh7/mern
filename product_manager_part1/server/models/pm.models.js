// import mongoose to built a model
const mongoose = require('mongoose');

// the schema - the rules that the entries in the db must follow

const PmSchema = new mongoose.Schema({
	title: String,
	price: Number,
    description: String
},{timestamps:true});

// the model - this is what we use to make the actual queries to the DB
const PM = mongoose.model("PM", PmSchema)

// eport the model
module.exports = PM;