const Author = require("../models/author.models");

module.exports.findAllData = (req, res) => {
    Author.find()
    // IMPORTANT what we return here is what we will receive in REACT
        .then(allData => res.json({ author: allData, message: "success" }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// READ ONE
module.exports.findOneSingleData = (req, res) => {
	Author.findOne({ _id: req.params.id })
		.then(oneSingleData => res.json({ author: oneSingleData, message: "success"  }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

// CREATE
module.exports.createNewData = (req, res) => {
    console.log(req.body);
    Author.create(req.body)
    .then(newlyCreatedData => res.json({ author: newlyCreatedData, message: "success"  }))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

// UPDATE
module.exports.updateExistingData = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    // In axios if you would do response.data -> response.data.jokes
    .then(updatedData => res.json({ author: updatedData, message: "success" }))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingData = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};