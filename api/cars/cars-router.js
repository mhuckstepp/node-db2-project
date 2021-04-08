const router = require("express").Router();
const { getAll, getById, create } = require("./cars-model");
const MiddleWare = require("./cars-middleware");

router.get("/", (req, res, next) => {
  getAll()
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/:id", (req, res, next) => {
  res.status(200).json(req.params.id);
});

router.post("/", (req, res, next) => {
  res.status(200).json(req.body);
});

module.exports = router;
