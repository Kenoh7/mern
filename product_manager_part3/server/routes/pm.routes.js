const PmController = require("../controllers/pm.controllers");

module.exports = (app) => {
    app.get("/api/pm/", PmController.findAllData);
    app.get("/api/pm/:id", PmController.findOneSingleData);
    app.put("/api/pm/:id", PmController.updateExistingData);
    app.post("/api/pm/new", PmController.createNewData);
    app.delete("/api/pm/delete/:id", PmController.deleteAnExistingData);
};