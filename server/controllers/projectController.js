const Project = require("../models/Project");
const projectController = {};

projectController.getUserProject = async (req, res, next) => {
  try {
    const { title } = req.query;
    console.log(title);
    const response = await Project.find({ title });
    console.log(response);
    res.locals.project = response;
    next();
  } catch (err) {
    next();
  }
};

projectController.createProject = async (req, res, next) => {
  try {
    const { slides, title } = req.body;
    const response = await Project.create({ title, slides });
    console.log(response);
    res.locals.response = response;
    next();
  } catch (err) {
    next();
  }
};

projectController.updateProjectSlides = async (req, res, next) => {
  try {
    const { title, slides } = req.body;
    const response = await Project.findOneAndUpdate({ title }, { slides }, { new: true });
    res.locals.updated = response;
    console.log(response);
    next();
  } catch (err) {
    next();
  }
};

module.exports = projectController;
