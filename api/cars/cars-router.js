const router = require("express").Router();
const { getAll, create } = require("./cars-model");
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
} = require("./cars-middleware");

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

router.post(
  "/",
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
  (req, res, next) => {
    create(req.body)
      .then((car) => {
        res.status(201).json(car);
      })
      .catch((err) => {
        next(err);
      });
  }
);

// eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(500).json({
    message: "something went wrong inside the car router",
    errMessage: err.message,
  });
});

module.exports = router;
