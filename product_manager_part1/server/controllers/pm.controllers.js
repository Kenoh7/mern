const PM = require("../models/pm.models");

module.exports.findAllData = (req, res) => {
    // db.jokes.find()
    PM.find()
    // IMPORTANT what we return here is what we will receive in REACT
        .then(allData => res.json({ pm: allData, message: "success" }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// READ ONE
module.exports.findOneSingleData = (req, res) => {
    //  /api/jokes/:id
	PM.findOne({ _id: req.params.id })
		.then(oneSingleData => res.json({ pm: oneSingleData, message: "success"  }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

// CREATE
module.exports.createNewData = (req, res) => {
    console.log(req.body);
    // const {setup,punchline} = req.body;
    // Joke.create({setup: setup, punchline:punchline})
    PM.create(req.body)
    .then(newlyCreatedData => res.json({ pm: newlyCreatedData, message: "success"  }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// UPDATE
module.exports.updateExistingData = (req, res) => {
    PM.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    // In axios if you would do response.data -> response.data.jokes
    .then(updatedData => res.json({ pm: updatedData, message: "success" }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingData = (req, res) => {
    PM.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};