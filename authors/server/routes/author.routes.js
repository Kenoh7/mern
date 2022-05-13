const AuthorController = require("../controllers/author.controllers");

module.exports = (app) => {
    app.get("/api/author/", AuthorController.findAllData);
    app.get("/api/author/:id", AuthorController.findOneSingleData);
    app.put("/api/author/:id", AuthorController.updateExistingData);
    app.post("/api/author/new", AuthorController.createNewData);
    app.delete("/api/author/delete/:id", AuthorController.deleteAnExistingData);
}