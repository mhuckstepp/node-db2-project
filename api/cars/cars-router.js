const router = require("express").Router();
const { getAll, getById, create } = require("./cars-model");
const { checkCarId } = require("./cars-middleware");

router.get("/", (req, res, next) => {
  getAll()
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/:id", checkCarId, (req, res, next) => {
  res.status(200).json(req.body.car);
});

router.post("/", (req, res, next) => {
  res.status(200).json(req.body);
});

// eslint-disable-next-line
router.use((err, req, res, next) => {
  // CALL next(err) IF THE PROMISE REJECTS INSIDE YOUR ENDPOINTS
  res.status(500).json({
    message: "something went wrong inside the car router",
    errMessage: err.message,
  });
});

module.exports = router;
