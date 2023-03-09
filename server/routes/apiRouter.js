const express = require("express");
const router = express.Router();

const projectController = require("../controllers/projectController");

// projectController, (req, res) => {
//   res.status(200).json(res.locals.test);
// }

router.get("/", projectController.getUserProject, (req, res, next) => {
  res.status(200).json(res.locals.project);
});

router.post("/", projectController.createProject, (req, res, next) => {
  res.status(200).json(res.locals.response);
});

router.patch("/", projectController.updateProjectSlides, (req, res, next) => {
  res.status(200).json(res.locals.updated);
});

module.exports = router;
