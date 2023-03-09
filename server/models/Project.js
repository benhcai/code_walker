const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  slides: [],
  title: String,
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
