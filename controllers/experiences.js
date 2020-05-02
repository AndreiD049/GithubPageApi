const experienceRouter = require('express').Router();
const { Experience, validTypes } = require('../models/experiences');

/* this router will be found on:
 *  /api/experiences uri
 */

experienceRouter.get('/', (req, res, next) => {
  Experience.find({})
    .then((exps) => {
      res.json(exps.map((exp) => exp.toJSON()));
    })
    .catch((error) => next(error));
});

experienceRouter.get('/:id', (req, res, next) => {
  Experience.findById(req.params.id)
    .then((exp) => {
      res.json(exp.toJSON());
    })
    .catch((error) => next(error));
});

experienceRouter.get('/type/:type', (req, res, next) => {
  const { type } = req.params;
  Experience.find({ type })
    .then((exps) => {
      res.json(exps.map((exp) => exp.toJSON()));
    })
    .catch((error) => next(error));
});

module.exports = experienceRouter;
