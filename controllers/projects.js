const projectRouter = require('express').Router();
const Project = require('../models/projects');

/* this router will be found on:
 *  /api/projects uri
 */

// get all projects
projectRouter.get('/', (req, res, next) => {
  Project.find({})
    .then((projects) => {
      res.json(projects.map((project) => project.toJSON()));
    })
    .catch((error) => next(error));
});

// get a specific project
projectRouter.get('/:id', (req, res, next) => {
  Project.findById(req.params.id)
    .then((project) => {
      res.json(project.toJSON());
    })
    .catch((error) => next(error));
});

module.exports = projectRouter;
